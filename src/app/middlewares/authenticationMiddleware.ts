import type { MiddlewareHandler } from 'hono';
import * as jwt from 'hono/jwt';

export const authenticationMiddleware: MiddlewareHandler = async (c, next) => {
  const credentials = c.req.raw.headers.get('Authorization');

  let token, payload;

  if (credentials) {
    const parts = credentials.split(/\s+/);
    if (parts.length == 2) {
      token = parts[1];
    }
  }
  try {
    payload = await jwt.verify(token as string, process.env.JWT_SECRET as string);
  } catch {
    // do nothing
  }

  c.set('jwtPayload', payload);

  await next();
};
