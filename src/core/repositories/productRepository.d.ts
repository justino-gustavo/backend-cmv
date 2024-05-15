import type { Product } from '../domain/entities/product';

export interface ProductRepository {
  createProduct(product: Product.Create): Promise<Product.Props>;
  getProductByUniqueKey(key: Product.UniqueKey): Promise<Product.Props | undefined>;
}
