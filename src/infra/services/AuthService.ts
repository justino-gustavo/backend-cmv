// AuthService.ts
// responsibility: Implement the AuthService interface
// design pattern: Service

import { left, right, type Either } from '@core/errors/either';
import type { IAuthRepo, IUserRepo } from '@core/repositories';
import { IAuthService } from '@core/services';
import * as jwt from 'hono/jwt';

const { JWT_SECRET } = process.env as Record<string, string>;

export class AuthService implements IAuthService.default {
  passwordUtils: PasswordService;
  tokenUtils: TokenService;

  private acessToken: AcessToken;
  private refreshToken: RefreshToken;

  constructor(
    private authRepo: IAuthRepo.default,
    private userRepo: IUserRepo.default
  ) {
    this.passwordUtils = new PasswordService();
    this.tokenUtils = new TokenService(authRepo);

    this.acessToken = new AcessToken(authRepo);
    this.refreshToken = new RefreshToken(authRepo);
  }

  async authenticateUser(
    input: IAuthService.AuthInput,
    password: string
  ): Promise<Either<Error, IAuthService.AuthOutput>> {
    const checkUser = await this.userRepo.getUser(input);
    if (checkUser.isLeft) return left(new Error('Bad credentials'));

    const checkPassword = await this.passwordUtils.comparePassword(
      password,
      checkUser.value.password
    );
    if (checkPassword.isLeft) return left(new Error('Bad credentials'));

    const refreshToken = await this.refreshToken.generateToken({
      id: checkUser.value.id,
      role: checkUser.value.role,
    });
    if (refreshToken.isLeft) return left(refreshToken.value);

    const accessToken = await this.acessToken.generateToken({
      id: checkUser.value.id,
      role: checkUser.value.role,
      refreshToken: refreshToken.value,
    });
    if (accessToken.isLeft) return left(accessToken.value);

    return right({ ...checkUser.value, token: accessToken.value });
  }
  async checkUser(input: IAuthService.CheckInput): Promise<Either<Error, string>> {
    const checkUser = await this.userRepo.getUser(input);
    if (checkUser.isLeft) {
      this.tokenUtils.revokeToken(input.token);

      return left(new Error('Invalid session'));
    }

    const checkToken = await this.acessToken.validateToken(input.token);
    if (checkToken.isLeft && !this.acessToken.getPayload) return left(checkToken.value);

    const checkPayload = this.acessToken.getPayload;
    if (checkPayload.data.id !== checkUser.value.id) return left(new Error('Invalid session'));
    if (checkPayload.data.role !== checkUser.value.role) return left(new Error('Invalid session'));
    if (checkToken.isRight) {
      return right(input.token);
    }

    const checkRefreshToken = await this.refreshToken.validateToken(
      checkPayload.data.refreshToken ?? ''
    );
    if (checkRefreshToken.isLeft) return left(checkRefreshToken.value);

    const checkRefreshPayload = this.refreshToken.getPayload;
    if (checkRefreshPayload.data.id !== checkUser.value.id)
      return left(new Error('Invalid session'));
    if (checkRefreshPayload.data.role !== checkUser.value.role)
      return left(new Error('Invalid session'));

    if (checkRefreshToken.isRight && checkRefreshPayload.valid) {
      const newAccessToken = await this.acessToken.generateToken({
        id: checkUser.value.id,
        role: checkUser.value.role,
        refreshToken: checkPayload.data.refreshToken,
      });
      if (newAccessToken.isLeft) return left(newAccessToken.value);

      return right(newAccessToken.value);
    }

    return right(input.token);
  }
}

class PasswordService implements IAuthService.Password.default {
  async hashPassword(password: string): Promise<Either<Error, string>> {
    const newHash = await Bun.password.hash(password);
    if (!newHash) return left(new Error('Password not generated'));

    return right(newHash);
  }
  async comparePassword(password: string, hash: string): Promise<Either<Error, boolean>> {
    const checkHash = await Bun.password.verify(password, hash);
    if (!checkHash) return left(new Error('Invalid password'));

    return right(checkHash);
  }
}

class TokenService implements IAuthService.Token.default {
  protected _payload: IAuthService.Token.GenerateInput;
  protected _token: string;

  constructor(private authRepo: IAuthRepo.default) {}

  async generateToken(input: IAuthService.Token.GenerateInput): Promise<Either<Error, string>> {
    const newToken = await jwt.sign(input, JWT_SECRET);
    if (!newToken) return left(new Error('Token not generated'));

    this._payload = input;
    this._token = newToken;

    return right(newToken);
  }
  async validateToken(token: string): Promise<Either<Error, boolean>> {
    try {
      const revoked = await this.authRepo.getToken(token);
      const checkToken = await jwt.verify(token, JWT_SECRET);
      const payload = await jwt.decode(token).payload;

      if (!checkToken && revoked.isRight) {
        await this.authRepo.deleteToken(token);

        this._payload = {} as IAuthService.Token.GenerateInput;

        return left(new Error('Revoked token'));
      }
      if (!checkToken && !payload) {
        this._payload = {} as IAuthService.Token.GenerateInput;

        return left(new Error('Invalid token'));
      }
      if (!checkToken && payload) {
        this._payload = Object.assign(payload, { valid: false });

        return left(new Error('Expired token'));
      }

      this._payload = Object.assign(checkToken, { valid: true });
      this._token = checkToken ? token : this._token;
      return right(!!checkToken);
    } catch (error) {
      return left(new Error('Invalid token'));
    }
  }
  async revokeToken(token: string): Promise<Either<Error, string>> {
    const checkToken = await this.validateToken(token);
    if (checkToken.isLeft) return right(token);

    const isRevoked = await this.authRepo.storeToken(token);
    if (isRevoked.isLeft) return left(isRevoked.value);

    this._payload = {} as IAuthService.Token.GenerateInput;
    this._token = '';
    return right(isRevoked.value);
  }

  get getPayload(): IAuthService.Token.GenerateInput {
    return this._payload;
  }
  get getToken(): string {
    return this._token;
  }
}

class AcessToken extends TokenService {
  async generateToken(
    input: IAuthService.Token.GenerateInput['data']
  ): Promise<Either<Error, string>> {
    // iat: Issued At Time
    // exp: Expiration Time
    // nbf: Not Before Time

    const payload: IAuthService.Token.GenerateInput = {
      data: input,
      iat: Math.floor(Date.now() / 1e3), // current time
      exp: Math.floor(Date.now() / 1e3) + 60 * 60, // 1 hour
    };

    return super.generateToken(payload);
  }
}

class RefreshToken extends TokenService {
  async generateToken(
    input: IAuthService.Token.GenerateInput['data']
  ): Promise<Either<Error, string>> {
    // iat: Issued At Time
    // exp: Expiration Time
    // nbf: Not Before Time

    const payload: IAuthService.Token.GenerateInput = {
      data: input,
      iat: Math.floor(Date.now() / 1e3), // current time
      exp: Math.floor(Date.now() / 1e3) + 60 * 60 * 24 * 30, // 30 days
      nbf: Math.floor(Date.now() / 1e3) + 60 * 30, // 30 minutes
    };

    return super.generateToken(payload);
  }
}
