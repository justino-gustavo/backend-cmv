import type { AtLeastOne } from '../utils/types';

export type CustomerUniqueKey = AtLeastOne<CustomerProps, 'id' | 'email' | 'phone'>;

export interface CustomerProps {
  id?: string;
  name: string;
  email?: string;
  phone?: number;
  address?: string;
}

export class Customer {
  private props: CustomerProps;

  constructor({ id, name, email, phone, address }: CustomerProps) {
    this.props = {
      id,
      name,
      email,
      phone,
      address,
    };
  }

  static create({ id, name, email, phone, address }: CustomerProps) {
    const customer = new Customer({ id, name, email, phone, address });

    return customer;
  }

  get getProps(): CustomerProps {
    return this.props;
  }
}
