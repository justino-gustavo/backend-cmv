import { graphqlServer } from '@hono/graphql-server';
import type { MiddlewareHandler } from 'hono';
import { prisma } from '../../infra/database/prisma';

import { schema } from '../graphql';

export const graphqlMiddleware: MiddlewareHandler = async (c, next) => {
  Object.assign(c, { prisma });
  return graphqlServer({
    schema,
  })(c);
};
