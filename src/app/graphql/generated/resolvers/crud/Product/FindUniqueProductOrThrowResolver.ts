import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../../helpers';
import { Product } from '../../../models/Product';
import { FindUniqueProductOrThrowArgs } from './args/FindUniqueProductOrThrowArgs';

@TypeGraphQL.Resolver(_of => Product)
export class FindUniqueProductOrThrowResolver {
  @TypeGraphQL.Query(_returns => Product, {
    nullable: true,
  })
  async getProduct(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindUniqueProductOrThrowArgs
  ): Promise<Product | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).product.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
