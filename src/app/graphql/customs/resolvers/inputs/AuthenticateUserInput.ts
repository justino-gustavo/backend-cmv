import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.InputType('AuthenticateUserInput', {})
export class AuthenticateUserInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  userName!: string | undefined;

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
}
