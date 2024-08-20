import * as TypeGraphQL from 'type-graphql';
import { SortOrder } from '../../enums/SortOrder';
import { ProductCountOrderByAggregateInput } from '../inputs/ProductCountOrderByAggregateInput';
import { ProductMaxOrderByAggregateInput } from '../inputs/ProductMaxOrderByAggregateInput';
import { ProductMinOrderByAggregateInput } from '../inputs/ProductMinOrderByAggregateInput';

@TypeGraphQL.InputType('ProductOrderByWithAggregationInput', {})
export class ProductOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => ProductCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: ProductCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: ProductMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: ProductMinOrderByAggregateInput | undefined;
}
