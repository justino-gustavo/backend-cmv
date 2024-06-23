import type { Order } from './Order';

export class Customer {
  id: string;
  createdAt: Date;
  name: string;
  email?: string;
  phone?: string;
  address?: string;
  orders?: Order[];

  static create(data: Customer.Data): Customer {
    return Object.assign(new Customer(), data);
  }
}

export namespace Customer {
  export interface Data {
    name: string;
    email?: string;
    phone?: string;
    address?: string;
    orders?: Order[];
  }
  export interface UniqueKey {
    id?: string;
    email?: string;
    phone?: string;
  }
}
