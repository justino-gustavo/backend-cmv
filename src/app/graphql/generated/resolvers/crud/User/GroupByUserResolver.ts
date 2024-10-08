import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from '../../../helpers';
import { User } from '../../../models/User';
import { UserGroupBy } from '../../outputs/UserGroupBy';
import { GroupByUserArgs } from './args/GroupByUserArgs';

@TypeGraphQL.Resolver(_of => User)
export class GroupByUserResolver {
  @TypeGraphQL.Query(_returns => [UserGroupBy], {
    nullable: false,
  })
  async groupByUser(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByUserArgs
  ): Promise<UserGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
