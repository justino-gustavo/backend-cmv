// UserRepository.ts
// responsibility: store and retrieve user data
// design pattern: Repository

import { User } from '@core/domain/entities';
import { left, right, type Either } from '@core/errors/either';
import type { IUserRepo } from '@core/repositories';

export class UserRepository implements IUserRepo.default {
  private users: User[] = [];

  async getUser(input: User.UniqueKey): Promise<Either<Error, User>> {
    const user = this.users.find(u => u.userName === input.userName);
    if (!user) return left(new Error('User not found'));

    return right(user);
  }

  async createUser(input: User.Data): Promise<Either<Error, User>> {
    const exists = await this.getUser(input);
    if (exists.isRight) return left(new Error('User already exists'));

    const newUser = User.create(input);
    const complete = Object.assign(newUser, {
      id: this.users.length + 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      role: User.Role.USER,
    });
    this.users.push(newUser);

    return right(complete);
  }

  deleteUser(input: User.UniqueKey): Promise<Either<Error, User>> {
    throw new Error('Method not implemented.');
  }

  updateUser(input: User.UniqueKey): Promise<Either<Error, User>> {
    throw new Error('Method not implemented.');
  }
}
