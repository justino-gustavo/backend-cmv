// CustomerRepository.d.ts
// responsability: Define the CustomerRepository interface
// design pattern: Data Transfer Object

import type { Customer } from '@core/domain/entities';
import type { Either } from '@core/errors/either';

interface Repository {
  createCustomer(input: Customer.Data): Promise<Either<Error, Customer>>;
  getCustomer(input: Customer.UniqueKey): Promise<Either<Error, Customer>>;
  updateCustomer(input: Customer.UniqueKey): Promise<Either<Error, Customer>>;
  deleteCustomer(input: Customer.UniqueKey): Promise<Either<Error, Customer>>;
}

export default Repository;
