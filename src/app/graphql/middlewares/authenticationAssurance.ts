import { Role } from '#generated';
import type { Context } from 'hono';
import type { AuthChecker } from 'type-graphql';

export const AuthenticationAssurance: AuthChecker<Context, Role> = async ({ context }, role) => {
  const user = await context.get('jwtPayload');

  if (!user) {
    return false;
  }

  return role.includes(user.data.role);
};
