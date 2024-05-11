import type { AtLeastOne } from '../utils/types';
import type { UserProps } from './user';

export type ProductUniqueKey = AtLeastOne<ProductProps, 'id'>;

export interface ProductProps {
  id?: string;
  name: string;
  description?: string;
  uses?: ProductProps[];
  usedIn?: ProductProps[];
  author: UserProps['id'];
}

export class Product {
  private props: ProductProps;

  constructor({ name, description, uses, usedIn, author }: ProductProps) {
    this.props = {
      name,
      description,
      uses,
      usedIn,
      author,
    };
  }

  static create({ name, description, uses, usedIn, author }: ProductProps) {
    const product = new Product({ name, description, uses, usedIn, author });

    return product;
  }

  get getProps(): ProductProps {
    return this.props;
  }
}
