import * as TypeGraphQL from 'type-graphql';
import { EnumRoleFilter } from '../inputs/EnumRoleFilter';
import { StringFilter } from '../inputs/StringFilter';
import { UserWhereInput } from '../inputs/UserWhereInput';

@TypeGraphQL.InputType('UserWhereUniqueInput', {})
export class UserWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  userName?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  phone?: string | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true,
  })
  AND?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true,
  })
  OR?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true,
  })
  NOT?: UserWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  password?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => EnumRoleFilter, {
    nullable: true,
  })
  role?: EnumRoleFilter | undefined;
}
