import * as TypeGraphQL from 'type-graphql';
import { SortOrder } from '../../enums/SortOrder';
import { CustomerCountOrderByAggregateInput } from '../inputs/CustomerCountOrderByAggregateInput';
import { CustomerMaxOrderByAggregateInput } from '../inputs/CustomerMaxOrderByAggregateInput';
import { CustomerMinOrderByAggregateInput } from '../inputs/CustomerMinOrderByAggregateInput';
import { SortOrderInput } from '../inputs/SortOrderInput';

@TypeGraphQL.InputType('CustomerOrderByWithAggregationInput', {})
export class CustomerOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  id?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  name?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true,
  })
  email?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true,
  })
  phone?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true,
  })
  address?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => CustomerCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: CustomerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomerMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: CustomerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CustomerMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: CustomerMinOrderByAggregateInput | undefined;
}
