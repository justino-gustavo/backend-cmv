import type { AtLeastOne } from '../../../utils/types';

export namespace Product {
  export type UniqueKey = AtLeastOne<Product.Props, 'id' | 'batch'>;

  export interface Props {
    id: string;
    name: string;
    description: string;
    batch: string;
    producedAt: Date;
    expiresAt: Date;
    uses?: string[];
    usedIn?: string[];
    author: string;
  }

  export interface Create {
    id?: string;
    name: string;
    description: string;
    batch: string;
    producedAt: Date;
    expiresAt: Date;
    uses?: string[];
    usedIn?: string[];
    author: string;
  }

  export interface Update {
    id: string;
    name?: string;
    description?: string;
    batch?: string;
    producedAt?: Date;
    expiresAt?: Date;
    uses?: string[];
    usedIn?: string[];
  }

  export interface Delete {
    id: string;
  }
}

export class Product {
  private props: Product.Create;

  constructor({
    name,
    description,
    batch,
    producedAt,
    expiresAt,
    uses,
    usedIn,
    author,
  }: Product.Create) {
    this.props = {
      name,
      description,
      batch,
      producedAt,
      expiresAt,
      uses,
      usedIn,
      author,
    };
  }

  get getProps(): Product.Create {
    return this.props;
  }
}
