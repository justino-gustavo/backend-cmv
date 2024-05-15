import type { User } from '../domain/entities/user';

export interface UserRepository {
  createUser(user: User.Create): Promise<User.Props>;
  getUserByUniqueKey(key: User.UniqueKey): Promise<User.Props | undefined>;
}
