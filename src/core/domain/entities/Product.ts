import type { User } from './User';

export class Product {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  description: string;
  batch: string;
  producedAt: Date;
  expiredAt: Date;
  price: number;
  cost: number;
  quantity: number;
  uses?: Product[];
  usedIn?: Product[];
  author?: User;

  static create(data: Product.Data, author?: User): Product {
    return Object.assign(new Product(), {
      ...data,
      author,
    });
  }
}

export namespace Product {
  export interface Data {
    name: string;
    description: string;
    batch: string;
    producedAt: Date;
    expiredAt: Date;
    uses?: Product[];
    usedIn?: Product[];
    price: number;
    cost: number;
    quantity: number;
  }
  export interface UniqueKey {
    id?: string;
    name?: string;
    batch?: string;
    author?: User;
  }
}
