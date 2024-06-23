// AuthRepository.d.ts
// responsability: Define the AuthRepository interface
// design pattern: Data Transfer Object

import type { Either } from '@core/errors/either';

interface Repository {
  storeToken(token: string): Promise<Either<Error, string>>;
  getToken(token: string): Promise<Either<Error, string>>;
  deleteToken(token: string): Promise<Either<Error, string>>;
}

export default Repository;
