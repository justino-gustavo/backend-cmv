import * as TypeGraphQL from 'type-graphql';
import { AuthenticateUserInput } from '~/inputs/AuthenticateUserInput';

@TypeGraphQL.ArgsType()
export class AuthenticateUserArgs {
  @TypeGraphQL.Field(_type => AuthenticateUserInput, {
    nullable: false,
  })
  credentials!: AuthenticateUserInput;
}
