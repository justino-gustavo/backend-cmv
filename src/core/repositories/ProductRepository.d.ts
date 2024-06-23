// ProductRepository.d.ts
// responsability: Define the ProductRepository interface
// design pattern: Data Transfer Object

import type { Product } from '@core/domain/entities';
import type { Either } from '@core/errors/either';

interface Repository {
  createProduct(input: Product.Data): Promise<Either<Error, Product>>;
  getProduct(input: Product.UniqueKey): Promise<Either<Error, Product>>;
  updateProduct(input: Product.UniqueKey): Promise<Either<Error, Product>>;
  deleteProduct(input: Product.UniqueKey): Promise<Either<Error, Product>>;
}

export default Repository;