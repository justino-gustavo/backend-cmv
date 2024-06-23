import { FindUniqueUserArgs, User } from '@app/graphql/generated';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '@app/graphql/generated/helpers';
import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.Resolver(_of => User)
export class FindUniqueUserResolver {
  @TypeGraphQL.Query(_returns => User, {
    nullable: true,
  })
  @TypeGraphQL.Authorized(['ADMIN', 'OPERATOR'])
  async user(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueUserArgs
  ): Promise<User | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
