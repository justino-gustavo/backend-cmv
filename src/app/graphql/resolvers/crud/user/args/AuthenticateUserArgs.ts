import * as TypeGraphQL from 'type-graphql';
import { AuthenticateUserInput } from '../../../inputs/authenticateUserInput';

@TypeGraphQL.ArgsType()
export class AuthenticateUserArgs {
  @TypeGraphQL.Field(_type => AuthenticateUserInput, {
    nullable: false,
  })
  cedentials!: AuthenticateUserInput;
}
