import { password as crypto } from 'bun';
import { v4 as uuid } from 'uuid';

import type { UserProps, UserUniqueKey } from '../../entities/user';
import type { KeyToValueMapping } from '../../utils/types';
import type { UserRepository } from '../userRepository';

export class InMemoryUserRepository implements UserRepository {
  private users: UserProps[] = [];

  async createUser(user: UserProps): Promise<UserProps> {
    user = Object.assign(user, { id: uuid(), password: await crypto.hash(user.password) });

    this.users.push(user);

    return user;
  }
  async getUserByUniqueKey(key: KeyToValueMapping<UserUniqueKey>): Promise<UserProps | undefined> {
    const user = this.users.find(
      user => user.id == key || user.userName == key || user.email == key
    );

    return user;
  }

  async updateUser(user: UserProps): Promise<UserProps> {
    throw new Error('Method not implemented.');
  }

  async deleteUser(id: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
