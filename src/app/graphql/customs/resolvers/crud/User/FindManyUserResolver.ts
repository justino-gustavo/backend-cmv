import { FindManyUserArgs, User } from '#generated';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '#generated/helpers';
import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.Resolver(_of => User)
export class FindManyUserResolver {
  @TypeGraphQL.Query(_returns => [User], {
    nullable: false,
  })
  @TypeGraphQL.Authorized(['ADMIN', 'OPERATOR'])
  async users(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyUserArgs
  ): Promise<User[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
