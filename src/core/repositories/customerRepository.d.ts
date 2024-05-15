import type { Customer } from '../domain/entities/customer';

export interface CustomerRepository {
  createCustomer(customer: Customer.Create): Promise<Customer.Props>;
  getCustomerByUniqueKey(key: Customer.UniqueKey): Promise<Customer.Props | undefined>;
}
