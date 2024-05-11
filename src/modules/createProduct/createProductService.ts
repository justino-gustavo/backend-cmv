import { Product } from '../../entities/product';

import type { ProductProps } from '../../entities/product';
import type { ProductRepository } from '../../repositories/productRepository';

type ProductRequest = ProductProps;

export class CreateProductService {
  private productRepo;

  constructor(productRepository: ProductRepository) {
    this.productRepo = productRepository;
  }

  async execute({ name, description, uses, usedIn, author }: ProductRequest) {
    if (!name || !author) {
      throw new Error('Invalid fields.');
    }

    const productCreate = Product.create({ name, description, uses, usedIn, author });
    const product = this.productRepo.createProduct(productCreate.getProps);

    return product;
  }
}
