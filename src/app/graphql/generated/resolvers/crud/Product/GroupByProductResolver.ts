import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from '../../../helpers';
import { Product } from '../../../models/Product';
import { ProductGroupBy } from '../../outputs/ProductGroupBy';
import { GroupByProductArgs } from './args/GroupByProductArgs';

@TypeGraphQL.Resolver(_of => Product)
export class GroupByProductResolver {
  @TypeGraphQL.Query(_returns => [ProductGroupBy], {
    nullable: false,
  })
  async groupByProduct(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: GroupByProductArgs
  ): Promise<ProductGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).product.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
