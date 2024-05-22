import * as TypeGraphQL from 'type-graphql';
import { User } from '../../generated/models/User';

@TypeGraphQL.ObjectType('Auth', {})
export class Auth extends User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  token!: string;
}
