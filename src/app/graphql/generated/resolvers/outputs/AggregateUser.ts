import * as TypeGraphQL from 'type-graphql';
import { UserCountAggregate } from '../outputs/UserCountAggregate';
import { UserMaxAggregate } from '../outputs/UserMaxAggregate';
import { UserMinAggregate } from '../outputs/UserMinAggregate';

@TypeGraphQL.ObjectType('AggregateUser', {})
export class AggregateUser {
  @TypeGraphQL.Field(_type => UserCountAggregate, {
    nullable: true,
  })
  _count!: UserCountAggregate | null;

  @TypeGraphQL.Field(_type => UserMinAggregate, {
    nullable: true,
  })
  _min!: UserMinAggregate | null;

  @TypeGraphQL.Field(_type => UserMaxAggregate, {
    nullable: true,
  })
  _max!: UserMaxAggregate | null;
}
