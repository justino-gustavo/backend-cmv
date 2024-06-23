// AuthService.d.ts
// responsability: Define the AuthService interface
// design pattern: Data Transfer Object

import type { User } from '@core/domain/entities';
import type { Either } from '@core/errors/either';
import type IPasswordService from './PasswordService';
import type ITokenService from './TokenService';

export * as Password from './PasswordService';
export * as Token from './TokenService';

export type AuthInput = User.UniqueKey & { password: string };
export type AuthOutput = User & { token: string };
export type CheckInput = User.UniqueKey & { token: string };

interface Service {
  authenticateUser(input: AuthInput, password: string): Promise<Either<Error, AuthOutput>>;
  checkUser(input: CheckInput): Promise<Either<Error, string>>;
  tokenUtils: ITokenService;
  passwordUtils: IPasswordService;
}

export default Service;
