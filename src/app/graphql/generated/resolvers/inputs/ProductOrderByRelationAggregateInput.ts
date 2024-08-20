import * as TypeGraphQL from 'type-graphql';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('ProductOrderByRelationAggregateInput', {})
export class ProductOrderByRelationAggregateInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  _count?: 'asc' | 'desc' | undefined;
}
