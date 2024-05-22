import { graphqlServer } from '@hono/graphql-server';
import type { MiddlewareHandler } from 'hono';
import { prisma } from '../../infra/database/prisma';

import { buildSchema, type NonEmptyArray } from 'type-graphql';
import {
  AuthenticateUserResolver,
  CreateOneUserResolver,
  FindManyUserResolver,
  FindUniqueUserResolver,
} from '../graphql/customs';
import { CustomerCrudResolver, ProductCrudResolver } from '../graphql/generated';

import { AuthenticationAssurance } from '../graphql/middlewares/authenticationAssurance';

const resolvers: NonEmptyArray<Function> = [
  CustomerCrudResolver,
  ProductCrudResolver,

  AuthenticateUserResolver,
  CreateOneUserResolver,
  FindManyUserResolver,
  FindUniqueUserResolver,
];

const schema = await buildSchema({
  resolvers,
  authChecker: AuthenticationAssurance,
});

export const graphqlMiddleware: MiddlewareHandler = async (c, next) => {
  Object.assign(c, { prisma });
  return graphqlServer({
    schema,
  })(c);
};
