import * as TypeGraphQL from 'type-graphql';
import { SortOrder } from '../../enums/SortOrder';
import { ProductOrderByRelationAggregateInput } from '../inputs/ProductOrderByRelationAggregateInput';

@TypeGraphQL.InputType('ProductOrderByWithRelationInput', {})
export class ProductOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  name?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  description?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  batch?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  producedAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  expiredAt?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByRelationAggregateInput, {
    nullable: true,
  })
  uses?: ProductOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByRelationAggregateInput, {
    nullable: true,
  })
  usedIn?: ProductOrderByRelationAggregateInput | undefined;
}
