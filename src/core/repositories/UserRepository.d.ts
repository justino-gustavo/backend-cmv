// UserRepository.d.ts
// responsability: Define the UserRepository interface
// design pattern: Data Transfer Object

import type { User } from '@core/domain/entities';
import type { Either } from '@core/errors/either';

interface Repository {
  createUser(input: User.Data): Promise<Either<Error, User>>;
  getUser(input: User.UniqueKey): Promise<Either<Error, User>>;
  updateUser(input: User.UniqueKey): Promise<Either<Error, User>>;
  deleteUser(input: User.UniqueKey): Promise<Either<Error, User>>;
}

export default Repository;
