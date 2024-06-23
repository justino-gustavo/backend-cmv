// CreateProduct use case
// responsibility: create a new product
// design pattern: Use Case

import { product as regex } from '@config/regex';
import { left, right, type Either } from '@core/errors/either';
import type { IProductRepo } from '@core/repositories';
import { Product } from '../entities';

class CreateProductError extends Error {
  constructor(message: string, stack?: string) {
    super(message);
    this.name = 'CreateProductError';
    this.stack = stack || 'Invalid product data';
  }
}

export class CreateProduct {
  constructor(private productRepo: IProductRepo.default) {}

  async execute(input: Product.Data): Promise<Either<Error, Product>> {
    const validatedInput = this.validate(input);
    if (validatedInput) return left(validatedInput);

    const exists = await this.productRepo.getProduct(input);
    if (exists.isRight) return left(new CreateProductError('Product already exists'));

    const newProduct = await this.productRepo.createProduct(input);
    if (newProduct.isLeft) return left(newProduct.value);

    return right(newProduct.value);
  }

  validate(input: Product.Data) {
    const { name, description, batch, producedAt, expiredAt, quantity, cost, price, usedIn, uses } =
      input;

    if (!name) return new CreateProductError('Name is required');
    if (!description) return new CreateProductError('Description is required');
    if (!batch) return new CreateProductError('Batch is required');
    if (!producedAt) return new CreateProductError('Produced at is required');
    if (!expiredAt) return new CreateProductError('Expired at is required');
    if (!quantity) return new CreateProductError('Quantity is required');
    if (!cost) return new CreateProductError('Cost is required');
    if (!price) return new CreateProductError('Price is required');

    if (!regex.name.test(name)) return new CreateProductError('Invalid name format');
    if (!regex.description.test(description))
      return new CreateProductError('Invalid description format');
    if (!regex.batch.test(batch)) return new CreateProductError('Invalid batch format');

    if (usedIn && !Array.isArray(usedIn)) return new CreateProductError('Invalid usedIn format');
    if (uses && !Array.isArray(uses)) return new CreateProductError('Invalid uses format');
  }
}
