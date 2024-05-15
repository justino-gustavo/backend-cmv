import { beforeEach, describe, expect, test } from 'bun:test';

import { InMemoryProductRepository } from '../../../infra/repositories/inMemory/productRepository';
import { CreateProductUseCase } from './createProduct';

import type { ProductRepository } from '../../repositories/productRepository';
import type { Product } from '../entities/product';

describe('CreateProduct use case', () => {
  let productRepository: ProductRepository;
  let productCreate: CreateProductUseCase;

  const productData: Product.Create = {
    name: 'product',
    description: 'description',
    batch: '123',
    producedAt: new Date(),
    expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
    author: '123',
  };

  const eachInvalidProductData = [
    ['name', { ...productData, name: '' }],
    ['description', { ...productData, description: '' }],
    ['author', { ...productData, author: '' }],
    ['producedAt', { ...productData, producedAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30) }],
    ['expiresAt', { ...productData, expiresAt: new Date(Date.now() - 1000 * 60 * 60 * 24 * 30) }],
  ];

  beforeEach(() => {
    productRepository = new InMemoryProductRepository();
    productCreate = new CreateProductUseCase(productRepository);
  });

  test('should create a product', async () => {
    const product = productCreate.execute(productData);

    expect(product).resolves.toHaveProperty('id', expect.any(String));
    expect(product).resolves.toContainKeys(Object.keys(productData));
  });

  test.each(eachInvalidProductData)(
    'should not create a product if %s is invalid',
    async (_, productData) => {
      const product = productCreate.execute(productData as Product.Create);

      expect(product).rejects.toThrowError('Invalid product data');
    }
  );
});
