// AuthencateUser use case
// responsability: authenticate a user
// design pattern: Use Case

import { user as regex } from '@config/regex';
import { left, right, type Either } from '@core/errors/either';
import type { IUserRepo } from '@core/repositories';
import type { IAuthService } from '@core/services';
import { User } from '../entities';

class AuthenticateUserError extends Error {
  constructor(message: string, stack?: string) {
    super(message);
    this.name = 'AuthenticateUserError';
    this.stack = stack || 'Invalid user data';
  }
}

export class AuthenticateUser {
  constructor(
    private userRepo: IUserRepo.default,
    private authService: IAuthService.default
  ) {}

  async execute(input: IAuthService.AuthInput): Promise<Either<Error, User>> {
    const validatedInput = this.validate(input);
    if (validatedInput) return left(validatedInput);

    const user = await this.userRepo.getUser(input);
    if (user.isLeft) return left(new AuthenticateUserError('Bad credentials'));

    const passwordMatch = await this.authService.passwordUtils.comparePassword(
      input.password,
      user.value.password
    );
    if (passwordMatch.isLeft) return left(new AuthenticateUserError('Bad credentials'));

    return right(user.value);
  }

  validate(input: IAuthService.AuthInput) {
    const { userName, email, phone, password } = input;

    if (!userName && !email && !phone)
      return new AuthenticateUserError('Username, email or phone is required');
    if (!password) return new AuthenticateUserError('Password is required');

    if (userName && !regex.userName.test(userName))
      return new AuthenticateUserError('Invalid username format');
    if (email && !regex.email.test(email)) return new AuthenticateUserError('Invalid email format');
    if (phone && !regex.phone.test(phone)) return new AuthenticateUserError('Invalid phone format');
    if (!regex.password.test(password)) return new AuthenticateUserError('Invalid password format');
  }
}
