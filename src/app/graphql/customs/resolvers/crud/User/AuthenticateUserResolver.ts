import { Auth } from '@app/graphql/customs/models/Auth';
import { getPrismaFromContext } from '@app/graphql/generated/helpers';
import type { PrismaClient } from '@prisma/client';
import * as jwt from 'hono/jwt';
import * as TypeGraphQL from 'type-graphql';
import { AuthenticateUserArgs } from './args/AuthenticateUserArgs';

@TypeGraphQL.Resolver(_of => Auth)
export class AuthenticateUserResolver {
  @TypeGraphQL.Query(_returns => Auth, {
    nullable: false,
  })
  async authenticateUser(
    @TypeGraphQL.Ctx() ctx: PrismaClient,
    @TypeGraphQL.Args() args: AuthenticateUserArgs
  ): Promise<Auth> {
    const { userName, email, phone, password } = args.credentials;

    let user, isPasswordValid;

    try {
      user = await getPrismaFromContext(ctx).user.findUnique({
        where: {
          userName,
          email,
          phone,
        },
      });

      isPasswordValid = await Bun.password.verify(password, user.password);

      if (!isPasswordValid) {
        throw new Error('Invalid credentials');
      }
    } catch {
      throw new Error('Invalid credentials');
    }

    const token = await jwt.sign(
      {
        data: {
          id: user.id,
          userName: user.userName,
          role: user.role,
        },
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 16, // 16 hours
        iat: Math.floor(Date.now() / 1000), // current time
      },
      process.env.JWT_SECRET as string
    );

    return {
      ...user,
      token,
    };
  }
}
