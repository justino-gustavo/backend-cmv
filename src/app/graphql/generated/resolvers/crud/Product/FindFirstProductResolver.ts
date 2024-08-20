import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../../helpers';
import { Product } from '../../../models/Product';
import { FindFirstProductArgs } from './args/FindFirstProductArgs';

@TypeGraphQL.Resolver(_of => Product)
export class FindFirstProductResolver {
  @TypeGraphQL.Query(_returns => Product, {
    nullable: true,
  })
  async findFirstProduct(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstProductArgs
  ): Promise<Product | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).product.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
