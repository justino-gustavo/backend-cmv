import * as TypeGraphQL from 'type-graphql';

export enum Role {
  USER = 'USER',
  OPERATOR = 'OPERATOR',
  ADMIN = 'ADMIN',
}
TypeGraphQL.registerEnumType(Role, {
  name: 'Role',
  description: undefined,
});
