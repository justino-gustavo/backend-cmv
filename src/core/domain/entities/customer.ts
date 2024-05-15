import type { AtLeastOne } from '../../../utils/types';

export namespace Customer {
  export type UniqueKey = AtLeastOne<Customer.Props, 'id' | 'phone' | 'email'>;

  export interface Props {
    id: string;
    name: string;
    email?: string;
    phone?: string;
    address?: string;
  }

  export interface Create {
    id?: string;
    name: string;
    email?: string;
    phone?: string;
    address?: string;
  }

  export interface Update {
    id: string;
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
  }

  export interface Delete {
    id: string;
  }
}

export class Customer {
  private props: Customer.Create;

  constructor({ name, email, phone, address }: Customer.Create) {
    this.props = {
      name,
      email,
      phone,
      address,
    };
  }

  get getProps(): Customer.Create {
    return this.props;
  }

  set setId(id: string) {
    this.props.id = id;
  }
}
