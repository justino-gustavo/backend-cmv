import * as TypeGraphQL from 'type-graphql';
import { SortOrder } from '../../enums/SortOrder';
import { SortOrderInput } from '../inputs/SortOrderInput';
import { UserCountOrderByAggregateInput } from '../inputs/UserCountOrderByAggregateInput';
import { UserMaxOrderByAggregateInput } from '../inputs/UserMaxOrderByAggregateInput';
import { UserMinOrderByAggregateInput } from '../inputs/UserMinOrderByAggregateInput';

@TypeGraphQL.InputType('UserOrderByWithAggregationInput', {})
export class UserOrderByWithAggregationInput {
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
  userName?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true,
  })
  email?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true,
  })
  phone?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  password?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true,
  })
  role?: 'asc' | 'desc' | undefined;

  @TypeGraphQL.Field(_type => UserCountOrderByAggregateInput, {
    nullable: true,
  })
  _count?: UserCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserMaxOrderByAggregateInput, {
    nullable: true,
  })
  _max?: UserMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => UserMinOrderByAggregateInput, {
    nullable: true,
  })
  _min?: UserMinOrderByAggregateInput | undefined;
}
