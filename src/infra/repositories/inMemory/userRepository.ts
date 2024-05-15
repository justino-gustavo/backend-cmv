import { v4 as uuid } from 'uuid';

import type { User } from '../../../core/domain/entities/user';
import type { UserRepository } from '../../../core/repositories/userRepository';

export class InMemoryUserRepository implements UserRepository {
  private users: User.Props[] = [];

  async createUser(user: User.Create): Promise<User.Props> {
    const userData = Object.assign(user, {
      id: uuid(),
      password: await Bun.password.hash(user.password),
    });

    this.users.push(userData);

    return userData;
  }

  async getUserByUniqueKey(key: User.UniqueKey): Promise<User.Props | undefined> {
    const userData = this.users.find(user => {
      return (
        user.id === key.id ||
        user.email === key.email ||
        user.phone === key.phone ||
        user.userName === key.userName
      );
    });

    return userData;
  }
}
