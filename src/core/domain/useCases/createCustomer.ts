import { Customer } from '../entities/customer';

import type { CustomerRepository } from '../../repositories/customerRepository';

export class CreateCustomerUseCase {
  private customerRepository: CustomerRepository;

  constructor(customerRepository: CustomerRepository) {
    this.customerRepository = customerRepository;
  }

  async execute(data: Customer.Create) {
    const customerExists = await this.customerRepository.getCustomerByUniqueKey(data);

    if (customerExists) {
      throw new Error('Customer already exists');
    }
    if (!data.name) {
      throw new Error('Invalid customer data');
    }

    const customerCreate = new Customer(data);
    const customer = await this.customerRepository.createCustomer(customerCreate.getProps);

    return customer;
  }
}
