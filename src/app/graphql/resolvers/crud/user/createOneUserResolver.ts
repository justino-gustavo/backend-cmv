import { CreateOneUserArgs, User } from '@generated/type-graphql';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '@generated/type-graphql/helpers';
import { password } from 'bun';
import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.Resolver(_of => User)
export class CreateOneUserResolver {
  @TypeGraphQL.Mutation(_returns => User, {
    nullable: false,
  })
  async createOneUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneUserArgs
  ): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);

    args.data.password = await password.hash(args.data.password);

    return getPrismaFromContext(ctx).user.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
