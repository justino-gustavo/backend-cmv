import { buildSchema } from 'type-graphql';
import { AuthenticationAssurance } from './middlewares/authenticationAssurance';
import { resolvers } from './resolvers';

export const schema = await buildSchema({
  resolvers,
  authChecker: AuthenticationAssurance,
});
