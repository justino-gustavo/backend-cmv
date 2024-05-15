import type { AtLeastOne } from '../../../utils/types';

export namespace User {
  export type UniqueKey = AtLeastOne<User.Props, 'id' | 'userName' | 'email' | 'phone'>;

  export interface Props {
    id: string;
    name: string;
    userName: string;
    phone?: string;
    email: string;
    password: string;
  }

  export interface Create {
    id?: string;
    name: string;
    userName: string;
    phone?: string;
    email: string;
    password: string;
  }

  export interface Update {
    id: string;
    name?: string;
    userName?: string;
    phone?: string;
    email?: string;
    password?: string;
  }

  export interface Delete {
    id: string;
  }
}

export class User {
  private props: User.Create;

  constructor({ name, userName, email, phone, password }: User.Create) {
    this.props = {
      name,
      userName,
      email,
      phone,
      password,
    };
  }

  get getProps(): User.Create {
    return this.props;
  }
}
