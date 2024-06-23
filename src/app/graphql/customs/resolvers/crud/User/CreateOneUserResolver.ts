import { CreateOneUserArgs, User } from '@app/graphql/generated';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '@app/graphql/generated/helpers';
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

    args.data.password = await Bun.password.hash(args.data.password);

    return getPrismaFromContext(ctx).user.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
