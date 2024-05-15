import { v4 as uuid } from 'uuid';

import type { Customer } from '../../../core/domain/entities/customer';

export class InMemoryCustomerRepository {
  private customers: Customer.Props[] = [];

  async createCustomer(customer: Customer.Create): Promise<Customer.Props> {
    const customerData = Object.assign(customer, { id: customer.id || uuid() });

    this.customers.push(customerData);

    return customerData;
  }

  async getCustomerByUniqueKey(key: Customer.UniqueKey): Promise<Customer.Props | undefined> {
    const customerData = this.customers.find(customer => {
      return customer.id === key.id || customer.email === key.email || customer.phone === key.phone;
    });

    return customerData;
  }
}
