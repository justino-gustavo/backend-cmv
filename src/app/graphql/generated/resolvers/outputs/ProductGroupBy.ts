import * as TypeGraphQL from 'type-graphql';
import { ProductCountAggregate } from '../outputs/ProductCountAggregate';
import { ProductMaxAggregate } from '../outputs/ProductMaxAggregate';
import { ProductMinAggregate } from '../outputs/ProductMinAggregate';

@TypeGraphQL.ObjectType('ProductGroupBy', {})
export class ProductGroupBy {
  @TypeGraphQL.Field(_type => String, {
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

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;

  @TypeGraphQL.Field(_type => ProductCountAggregate, {
    nullable: true,
  })
  _count!: ProductCountAggregate | null;

  @TypeGraphQL.Field(_type => ProductMinAggregate, {
    nullable: true,
  })
  _min!: ProductMinAggregate | null;

  @TypeGraphQL.Field(_type => ProductMaxAggregate, {
    nullable: true,
  })
  _max!: ProductMaxAggregate | null;
}
