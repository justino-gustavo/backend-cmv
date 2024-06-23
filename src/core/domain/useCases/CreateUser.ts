// CreateUser use case
// responsibility: create a new user
// design pattern: Use Case

import { user as regex } from '@config/regex';
import { left, right, type Either } from '@core/errors/either';
import type { IUserRepo } from '@core/repositories';
import type { IAuthService } from '@core/services';
import { User } from '../entities';

class CreateUserError extends Error {
  constructor(message: string, stack?: string) {
    super(message);
    this.name = 'CreateUserError';
    this.stack = stack || 'Invalid user data';
  }
}

export class CreateUser {
  constructor(
    private userRepo: IUserRepo.default,
    private authService: IAuthService.default
  ) {}

  async execute(input: User.Data): Promise<Either<Error, User>> {
    const validatedInput = this.validate(input);
    if (validatedInput) return left(validatedInput);

    const exists = await this.userRepo.getUser(input);
    if (exists.isRight) return left(new CreateUserError('User already exists'));

    const hashPassword = await this.authService.passwordUtils.hashPassword(input.password);
    if (hashPassword.isLeft) return left(hashPassword.value);

    const newUser = await this.userRepo.createUser({ ...input, password: hashPassword.value });
    if (newUser.isLeft) return left(newUser.value);

    return right(newUser.value);
  }

  validate(input: User.Data) {
    const { name, userName, email, phone, password, role } = input;

    if (!name) return new CreateUserError('Name is required');
    if (!userName) return new CreateUserError('Username is required');
    if (!email) return new CreateUserError('Email is required');
    if (!password) return new CreateUserError('Password is required');

    if (!regex.name.test(name)) return new CreateUserError('Invalid name format');
    if (!regex.userName.test(userName)) return new CreateUserError('Invalid username format');
    if (!regex.email.test(email)) return new CreateUserError('Invalid email format');
    if (phone && !regex.phone.test(phone)) return new CreateUserError('Invalid phone format');
    if (!regex.password.test(password)) return new CreateUserError('Invalid password format');
    if (role && !['admin', 'user'].includes(role))
      return new CreateUserError('Invalid role format');
  }
}
