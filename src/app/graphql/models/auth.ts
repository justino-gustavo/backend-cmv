import { User } from '@generated/type-graphql';
import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.ObjectType('Auth', {})
export class Auth extends User {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  token!: string;
}
