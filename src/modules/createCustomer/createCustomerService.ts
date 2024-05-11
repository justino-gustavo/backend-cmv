import { Customer, type CustomerProps } from '../../entities/customer';
import type { CustomerRepository } from '../../repositories/customerRepository';

type CustomerRequest = CustomerProps;

export class CreateCustomerService {
  private customerRepo;

  constructor(customerRepository: CustomerRepository) {
    this.customerRepo = customerRepository;
  }

  async execute({ id, name, email, phone, address }: CustomerRequest) {
    const exists = await this.customerRepo.getCustomerByUniqueKey(id || email || phone);

    if (exists) {
      throw new Error('Customer already exists.');
    }
    if (!name) {
      throw new Error('Invalid fields.');
    }

    const customerCreate = Customer.create({ id, name, email, phone, address });
    const customer = this.customerRepo.createCustomer(customerCreate.getProps);

    return customer;
  }
}
