import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from '../../../helpers';
import { Product } from '../../../models/Product';
import { AggregateProduct } from '../../outputs/AggregateProduct';
import { AggregateProductArgs } from './args/AggregateProductArgs';

@TypeGraphQL.Resolver(_of => Product)
export class AggregateProductResolver {
  @TypeGraphQL.Query(_returns => AggregateProduct, {
    nullable: false,
  })
  async aggregateProduct(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateProductArgs
  ): Promise<AggregateProduct> {
    return getPrismaFromContext(ctx).product.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
