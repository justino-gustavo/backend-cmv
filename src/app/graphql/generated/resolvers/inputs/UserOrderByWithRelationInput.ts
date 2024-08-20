import * as TypeGraphQL from 'type-graphql';
import { SortOrder } from '../../enums/SortOrder';
import { SortOrderInput } from '../inputs/SortOrderInput';

@TypeGraphQL.InputType('UserOrderByWithRelationInput', {})
export class UserOrderByWithRelationInput {
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
}
