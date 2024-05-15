import { beforeEach, describe, expect, test } from 'bun:test';
import { InMemoryCustomerRepository } from '../../../infra/repositories/inMemory/customerRepository';
import type { CustomerRepository } from '../../repositories/customerRepository';
import type { Customer } from '../entities/customer';
import { CreateCustomerUseCase } from './createCustomer';

describe('CreateCustomer use case', () => {
  let customerRepository: CustomerRepository;
  let createCustomer: CreateCustomerUseCase;

  const customerProps: Customer.Create = {
    name: 'John Doe',
    email: 'test@mail.com',
    phone: '123456789',
  };

  const eachInvalidCustomerProps = [['name', { ...customerProps, name: '' }]];

  beforeEach(() => {
    customerRepository = new InMemoryCustomerRepository();
    createCustomer = new CreateCustomerUseCase(customerRepository);
  });

  test('should create a customer', async () => {
    const customer = createCustomer.execute(customerProps);

    expect(customer).resolves.toHaveProperty('id', expect.any(String));
    expect(customer).resolves.toContainKeys(Object.keys(customerProps));
  });

  test('should not create a customer if already exists', async () => {
    await createCustomer.execute(customerProps);

    expect(createCustomer.execute(customerProps)).rejects.toThrowError('Customer already exists');
  });

  test.each(eachInvalidCustomerProps)(
    'should not create a customer if %s is invalid',
    async (_, customerData) => {
      const customer = createCustomer.execute(customerData as Customer.Create);

      expect(customer).rejects.toThrowError('Invalid customer data');
    }
  );
});
