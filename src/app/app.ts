import 'core-js/features/reflect';

import { Hono } from 'hono';
import { authenticationMiddleware, graphqlMiddleware } from './middlewares';

const app = new Hono();

app.use(authenticationMiddleware);
app.use('/graphql', graphqlMiddleware);

export default app;
