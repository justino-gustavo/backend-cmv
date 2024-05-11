import { v4 as uuid } from 'uuid';
import type { CustomerProps, CustomerUniqueKey } from '../../entities/customer';
import type { KeyToValueMapping } from '../../utils/types';
import type { CustomerRepository } from '../customerRepository';

export class InMemoryCustomerRepository implements CustomerRepository {
  private customers: CustomerProps[] = [];

  async createCustomer(customer: CustomerProps): Promise<CustomerProps> {
    customer = Object.assign(customer, { id: customer.id || uuid() });

    this.customers.push(customer);

    return customer;
  }
  async getCustomerByUniqueKey(
    key: KeyToValueMapping<CustomerUniqueKey>
  ): Promise<CustomerProps | undefined> {
    const customer = this.customers.find(
      customer => customer.id == key || customer.email == key || customer.phone == key
    );

    return customer;
  }
  async updateCustomer(user: CustomerProps): Promise<CustomerProps> {
    throw new Error('Method not implemented.');
  }
  async deleteCustomer(id: string): Promise<string> {
    throw new Error('Method not implemented.');
  }
}
