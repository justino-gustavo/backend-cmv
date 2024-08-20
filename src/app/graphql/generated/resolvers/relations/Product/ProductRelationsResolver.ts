import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../../helpers';
import { Product } from '../../../models/Product';
import { ProductUsedInArgs } from './args/ProductUsedInArgs';
import { ProductUsesArgs } from './args/ProductUsesArgs';

@TypeGraphQL.Resolver(_of => Product)
export class ProductRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Product], {
    nullable: false,
  })
  async uses(
    @TypeGraphQL.Root() product: Product,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ProductUsesArgs
  ): Promise<Product[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .product.findUniqueOrThrow({
        where: {
          id: product.id,
        },
      })
      .uses({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }

  @TypeGraphQL.FieldResolver(_type => [Product], {
    nullable: false,
  })
  async usedIn(
    @TypeGraphQL.Root() product: Product,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: ProductUsedInArgs
  ): Promise<Product[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx)
      .product.findUniqueOrThrow({
        where: {
          id: product.id,
        },
      })
      .usedIn({
        ...args,
        ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
      });
  }
}
