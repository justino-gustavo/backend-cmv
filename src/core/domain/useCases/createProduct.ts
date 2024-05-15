import type { ProductRepository } from '../../repositories/productRepository';
import { Product } from '../entities/product';

export class CreateProductUseCase {
  private productRepository: ProductRepository;

  constructor(productRepository: ProductRepository) {
    this.productRepository = productRepository;
  }

  async execute(data: Product.Create) {
    const productExists = await this.productRepository.getProductByUniqueKey(data);

    if (productExists) {
      throw new Error('Product already exists');
    }
    if (
      !data.name ||
      !data.description ||
      !data.batch ||
      !data.producedAt ||
      data.producedAt > data.expiresAt ||
      data.producedAt > new Date() ||
      !data.expiresAt ||
      data.expiresAt < new Date() ||
      !data.author
    ) {
      throw new Error('Invalid product data');
    }

    const productCreate = new Product(data);
    const product = await this.productRepository.createProduct(productCreate.getProps);

    return product;
  }
}
