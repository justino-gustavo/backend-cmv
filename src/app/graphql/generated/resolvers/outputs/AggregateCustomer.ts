import * as TypeGraphQL from 'type-graphql';
import { CustomerCountAggregate } from '../outputs/CustomerCountAggregate';
import { CustomerMaxAggregate } from '../outputs/CustomerMaxAggregate';
import { CustomerMinAggregate } from '../outputs/CustomerMinAggregate';

@TypeGraphQL.ObjectType('AggregateCustomer', {})
export class AggregateCustomer {
  @TypeGraphQL.Field(_type => CustomerCountAggregate, {
    nullable: true,
  })
  _count!: CustomerCountAggregate | null;

  @TypeGraphQL.Field(_type => CustomerMinAggregate, {
    nullable: true,
  })
  _min!: CustomerMinAggregate | null;

  @TypeGraphQL.Field(_type => CustomerMaxAggregate, {
    nullable: true,
  })
  _max!: CustomerMaxAggregate | null;
}
