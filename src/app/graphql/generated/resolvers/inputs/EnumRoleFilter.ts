import * as TypeGraphQL from 'type-graphql';
import { Role } from '../../enums/Role';
import { NestedEnumRoleFilter } from '../inputs/NestedEnumRoleFilter';

@TypeGraphQL.InputType('EnumRoleFilter', {})
export class EnumRoleFilter {
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

  @TypeGraphQL.Field(_type => NestedEnumRoleFilter, {
    nullable: true,
  })
  not?: NestedEnumRoleFilter | undefined;
}
