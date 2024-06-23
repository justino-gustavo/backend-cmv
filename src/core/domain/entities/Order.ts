import type { Customer } from "./Customer";
import type { Product } from "./Product";

export class Order {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  customer: Customer;
  products: Product[];
  status: Order.Status;
  total: number;
  note?: string;

  static create(data: Order.Data): Order {
    return Object.assign(new Order(), data);
  }
}

export namespace Order {
  export interface Data {
    customer: Customer;
    products: Product[];
    status: Status;
    total: number;
    note?: string;
  }
  export enum Status {
    PENDING = 'PENDING',
    PROCESSING = 'PROCESSING',
    SHIPPING = 'SHIPPING',
    DELIVERED = 'DELIVERED',
    CANCELED = 'CANCELED',
  }
  export interface UniqueKey {
    id?: string;
    customer?: Customer;
  }
}