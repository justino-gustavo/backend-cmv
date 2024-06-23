import type { Product } from './Product';

export class User implements User.Data {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  userName: string;
  email: string;
  phone?: string;
  password: string;
  role: User.Role;
  product?: Product[];

  static create(data: User.Data): User {
    return Object.assign(new User(), data);
  }
}

export namespace User {
  export interface Data {
    name: string;
    userName: string;
    email: string;
    phone?: string;
    password: string;
    role?: Role;
  }
  export enum Role {
    ADMIN = 'ADMIN',
    OPERATOR = 'OPERATOR',
    USER = 'USER',
  }
  export interface UniqueKey {
    id?: string;
    userName?: string;
    email?: string;
    phone?: string;
  }
}
