import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from '../../../helpers';
import { Customer } from '../../../models/Customer';
import { CustomerGroupBy } from '../../outputs/CustomerGroupBy';
import { GroupByCustomerArgs } from './args/GroupByCustomerArgs';

@TypeGraphQL.Resolver(_of => Customer)
export class GroupByCustomerResolver {
  @TypeGraphQL.Query(_returns => [CustomerGroupBy], {
    nullable: false,
  })
  async groupByCustomer(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByCustomerArgs
  ): Promise<CustomerGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).customer.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
