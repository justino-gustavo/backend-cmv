import * as TypeGraphQL from 'type-graphql';
import { EnumRoleWithAggregatesFilter } from '../inputs/EnumRoleWithAggregatesFilter';
import { StringNullableWithAggregatesFilter } from '../inputs/StringNullableWithAggregatesFilter';
import { StringWithAggregatesFilter } from '../inputs/StringWithAggregatesFilter';

@TypeGraphQL.InputType('UserScalarWhereWithAggregatesInput', {})
export class UserScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [UserScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: UserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: UserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: UserScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  userName?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  email?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  phone?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  password?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleWithAggregatesFilter, {
    nullable: true,
  })
  role?: EnumRoleWithAggregatesFilter | undefined;
}
