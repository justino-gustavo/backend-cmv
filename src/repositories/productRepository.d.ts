export interface ProductRepository {
    createProduct(product: ProductProps): Promise<ProductProps>;
    getProductByUniqueKey(key: KeyToValueMapping<ProductUniqueKey>): Promise<ProductProps | undefined>;
    updateProduct(product: ProductProps): Promise<ProductProps>;
    deleteProduct(id: string): Promise<string>;
}