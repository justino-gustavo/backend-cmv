// AuthRepository.ts
// responsibility: Implement the AuthRepository interface
// design pattern: Repository

import { left, right, type Either } from '@core/errors/either';
import type IAuthRepository from '@core/repositories/AuthRepository';

export class AuthRepository implements IAuthRepository {
  private tokens: Map<string, string> = new Map();

  async getToken(token: string): Promise<Either<Error, string>> {
    const storedToken = this.tokens.get(token);
    if (!storedToken) return left(new Error('Token not found'));

    return right(storedToken);
  }

  async storeToken(token: string): Promise<Either<Error, string>> {
    const exists = await this.getToken(token);
    if (exists.isRight) return left(new Error('Token already exists'));

    this.tokens.set(token, token);

    return right(token);
  }

  async deleteToken(token: string): Promise<Either<Error, string>> {
    const exists = await this.getToken(token);
    if (exists.isLeft) return left(new Error('Token not found'));

    this.tokens.delete(token);

    return right(token);
  }
}
