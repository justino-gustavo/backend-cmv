import type { UserProps, UserUniqueKey } from '../entities/user';
import type { KeyToValueMapping } from '../utils/types';

export interface UserRepository {
  createUser(user: UserProps): Promise<UserProps>;
  getUserByUniqueKey(key: KeyToValueMapping<UserUniqueKey>): Promise<UserProps | undefined>;
  updateUser(user: UserProps): Promise<UserProps>;
  deleteUser(id: string): Promise<string>;
}
