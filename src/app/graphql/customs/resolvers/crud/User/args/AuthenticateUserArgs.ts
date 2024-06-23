import { AuthenticateUserInput } from '@app/graphql/customs/resolvers/inputs/AuthenticateUserInput';
import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.ArgsType()
export class AuthenticateUserArgs {
  @TypeGraphQL.Field(_type => AuthenticateUserInput, {
    nullable: false,
  })
  credentials!: AuthenticateUserInput;
}
