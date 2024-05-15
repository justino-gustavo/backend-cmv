import { v4 as uuid } from 'uuid';

import type { Product } from '../../../core/domain/entities/product';
import type { ProductRepository } from '../../../core/repositories/productRepository';

export class InMemoryProductRepository implements ProductRepository {
  private products: Product.Props[] = [];

  async createProduct(product: Product.Create): Promise<Product.Props> {
    const productData = Object.assign(product, { id: uuid() });

    this.products.push(productData);

    return productData;
  }

  async getProductByUniqueKey(key: Product.UniqueKey): Promise<Product.Props | undefined> {
    const productData = this.products.find(product => {
      return product.id === key.id;
    });

    return productData;
  }

  async updateProduct(product: Product.Props): Promise<Product.Props> {
    throw new Error('Method not implemented.');
  }

  async deleteProduct(id: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
