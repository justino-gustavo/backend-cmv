import * as TypeGraphQL from 'type-graphql';
import { Role } from '../../enums/Role';

@TypeGraphQL.InputType('UserCreateManyInput', {})
export class UserCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  phone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  password!: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true,
  })
  role?: 'USER' | 'OPERATOR' | 'ADMIN' | undefined;
}
