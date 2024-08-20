import * as TypeGraphQL from 'type-graphql';
import { Role } from '../../enums/Role';
import { NestedEnumRoleFilter } from '../inputs/NestedEnumRoleFilter';
import { NestedEnumRoleWithAggregatesFilter } from '../inputs/NestedEnumRoleWithAggregatesFilter';
import { NestedIntFilter } from '../inputs/NestedIntFilter';

@TypeGraphQL.InputType('EnumRoleWithAggregatesFilter', {})
export class EnumRoleWithAggregatesFilter {
  @TypeGraphQL.Field(_type => Role, {
    nullable: true,
  })
  equals?: 'USER' | 'OPERATOR' | 'ADMIN' | undefined;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: true,
  })
  in?: Array<'USER' | 'OPERATOR' | 'ADMIN'> | undefined;

  @TypeGraphQL.Field(_type => [Role], {
    nullable: true,
  })
  notIn?: Array<'USER' | 'OPERATOR' | 'ADMIN'> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRoleWithAggregatesFilter, {
    nullable: true,
  })
  not?: NestedEnumRoleWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => NestedIntFilter, {
    nullable: true,
  })
  _count?: NestedIntFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRoleFilter, {
    nullable: true,
  })
  _min?: NestedEnumRoleFilter | undefined;

  @TypeGraphQL.Field(_type => NestedEnumRoleFilter, {
    nullable: true,
  })
  _max?: NestedEnumRoleFilter | undefined;
}
