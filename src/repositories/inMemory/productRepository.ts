import { v4 as uuid } from 'uuid';

import type { ProductProps, ProductUniqueKey } from '../../entities/product';
import type { KeyToValueMapping } from '../../utils/types';
import type { ProductRepository } from '../productRepository';

export class InMemoryProductRepository implements ProductRepository {
  private products: ProductProps[] = [];

  async createProduct(product: ProductProps): Promise<ProductProps> {
    product = Object.assign(product, { id: uuid() });

    this.products.push(product);

    return product;
  }

  async getProductByUniqueKey(
    key: KeyToValueMapping<ProductUniqueKey>
  ): Promise<ProductProps | undefined> {
    const product = this.products.find(product => product.id == key);

    return product;
  }

  async updateProduct(product: ProductProps): Promise<ProductProps> {
    throw new Error('Method not implemented.');
  }

  async deleteProduct(id: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
