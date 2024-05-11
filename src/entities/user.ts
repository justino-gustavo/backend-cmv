import type { AtLeastOne } from '../utils/types';

export type UserUniqueKey = AtLeastOne<UserProps, 'id' | 'userName' | 'email' | 'phone'>;

export interface UserProps {
  id?: string;
  name: string;
  userName: string;
  email: string;
  phone?: number;
  password: string;
}

export class User {
  private props: UserProps;

  constructor({ name, userName, email, phone, password }: UserProps) {
    this.props = {
      name,
      userName,
      email,
      phone,
      password,
    };
  }

  static create({ name, userName, email, phone, password }: UserProps) {
    const user = new User({ name, userName, email, phone, password });

    return user;
  }

  get getProps(): UserProps {
    return this.props;
  }
}
