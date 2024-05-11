import { beforeEach, describe, expect, test } from 'bun:test';
import type { ProductProps } from '../../entities/product';
import { InMemoryProductRepository } from '../../repositories/inMemory/productRepository';
import { CreateProductService } from './createProductService';

describe('create product', () => {
  let productRepository: InMemoryProductRepository;
  let createProductService: CreateProductService;

  const productData: ProductProps = {
    name: 'Sauce',
    description: 'Tomato sauce',
    uses: [{ name: 'Tomato', author: '1' }],
    usedIn: [{ name: 'Pizza', author: '3' }],
    author: '2',
  };
  const exceptRequireds = [
    ['name', { ...productData, name: '' }],
    ['author', { ...productData, author: '' }],
  ];

  beforeEach(() => {
    productRepository = new InMemoryProductRepository();
    createProductService = new CreateProductService(productRepository);
  });

  test('should be able to create new product', async () => {
    const product = createProductService.execute(productData);

    expect(product).resolves.toHaveProperty('id');
    expect(product).resolves.toContainKeys(Object.keys(productData));
  });
  test.each(exceptRequireds)('should throw an error for invalid %s', async (_field, data) => {
    const product = createProductService.execute(data as ProductProps);

    expect(product).rejects.toThrow('Invalid fields.');
  });
});
