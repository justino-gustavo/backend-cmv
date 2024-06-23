// PasswordService.d.ts
// responsability: Define the PasswordService interface
// design pattern: Data Transfer Object

import type { Either } from '@core/errors/either';

interface Service {
  hashPassword(password: string): Promise<Either<Error, string>>;
  comparePassword(password: string, hash: string): Promise<Either<Error, boolean>>;
}

export default Service;
