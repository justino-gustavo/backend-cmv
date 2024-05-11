import { beforeEach, describe, expect, test } from 'bun:test';
import type { CustomerProps } from '../../entities/customer';
import type { CustomerRepository } from '../../repositories/customerRepository';
import { InMemoryCustomerRepository } from '../../repositories/inMemory/customerRepository';
import { CreateCustomerService } from './createCustomerService';

describe('create customer', () => {
  let customerRepository: CustomerRepository;
  let createCustomerService: CreateCustomerService;

  const customerData: CustomerProps = {
    name: 'John Doe',
    email: 'johndoe@test.com',
    phone: 123456789,
  };
  const exceptRequireds = [['name', { ...customerData, name: '' }]];

  beforeEach(() => {
    customerRepository = new InMemoryCustomerRepository();
    createCustomerService = new CreateCustomerService(customerRepository);
  });

  test('should be able to create new customer', async () => {
    const customer = createCustomerService.execute(customerData);

    expect(customer).resolves.toHaveProperty('id');
    expect(customer).resolves.toContainKeys(Object.keys(customerData));
  });
  test('should not be able to create existing customer', async () => {
    const customerData: CustomerProps = {
      name: 'John Doe',
      email: 'johndoe@test.com',
      phone: 123456789,
    };

    await createCustomerService.execute(customerData);
    const customer = createCustomerService.execute(customerData);

    expect(customer).rejects.toThrowError('Customer already exists.');
  });
  test.each(exceptRequireds)('should throw an error for invalid %s', async (_field, data) => {
    const customer = createCustomerService.execute(data as CustomerProps);

    expect(customer).rejects.toThrowError(`Invalid fields.`);
  });
});
