import type { CustomerProps, CustomerUniqueKey } from '../entities/customer';
import type { KeyToValueMapping } from '../utils/types';

export interface CustomerRepository {
  createCustomer(customer: CustomerProps): Promise<CustomerProps>;
  getCustomerByUniqueKey(key: KeyToValueMapping<CustomerUniqueKey>): Promise<CustomerProps | undefined>;
  updateCustomer(user: CustomerProps): Promise<CustomerProps>;
  deleteCustomer(id: string): Promise<string>;
}
