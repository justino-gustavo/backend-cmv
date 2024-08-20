import * as TypeGraphQL from 'type-graphql';
import { Role } from '../enums/Role';
import { Product } from '../models/Product';

@TypeGraphQL.ObjectType('User', {})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  email?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  phone?: string | null;

  password?: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false,
  })
  role!: 'USER' | 'OPERATOR' | 'ADMIN';

  Product?: Product[];
}
