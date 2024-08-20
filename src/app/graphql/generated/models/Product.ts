import * as TypeGraphQL from 'type-graphql';
import { User } from '../models/User';
import { ProductCount } from '../resolvers/outputs/ProductCount';

@TypeGraphQL.ObjectType('Product', {})
export class Product {
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
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  batch!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  producedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  expiredAt!: Date;

  uses?: Product[];

  usedIn?: Product[];

  author?: User;

  @TypeGraphQL.Field(_type => ProductCount, {
    nullable: true,
  })
  _count?: ProductCount | null;
}
