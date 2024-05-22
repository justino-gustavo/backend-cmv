import type { Context } from 'hono';
import type { AuthChecker } from 'type-graphql';

export const AuthenticationAssurance: AuthChecker<Context> = async ({ context }) => {
  const user = context.get('jwtPayload');

  return !!user;
};
