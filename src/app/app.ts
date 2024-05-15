import { graphqlServer } from '@hono/graphql-server';
import { buildSchema } from 'graphql';
import { Hono } from 'hono';

const app = new Hono();

app.use(
  '/graphql',
  graphqlServer({
    schema: buildSchema('type Query { hello: String }'),
    rootResolver: ctx => {
      return {
        hello: () => 'Hello Hono!',
      };
    },
  })
);

export default app;
