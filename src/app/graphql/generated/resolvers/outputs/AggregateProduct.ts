import * as TypeGraphQL from 'type-graphql';
import { ProductCountAggregate } from '../outputs/ProductCountAggregate';
import { ProductMaxAggregate } from '../outputs/ProductMaxAggregate';
import { ProductMinAggregate } from '../outputs/ProductMinAggregate';

@TypeGraphQL.ObjectType('AggregateProduct', {})
export class AggregateProduct {
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
