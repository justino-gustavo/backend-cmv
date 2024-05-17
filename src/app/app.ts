import 'core-js/features/reflect';

import { resolvers } from '@generated/type-graphql';
import { graphqlServer } from '@hono/graphql-server';
import { PrismaClient } from '@prisma/client';
import { Hono } from 'hono';
import { buildSchema } from 'type-graphql';

const app = new Hono();
const prisma = new PrismaClient();

const schema = await buildSchema({
  resolvers,
});

app.use('/graphql', async (c, next) => {
  Object.assign(c, { prisma });
  return graphqlServer({
    schema,
  })(c);
});

export default app;
