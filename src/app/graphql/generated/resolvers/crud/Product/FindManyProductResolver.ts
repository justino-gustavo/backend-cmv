import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../../helpers';
import { Product } from '../../../models/Product';
import { FindManyProductArgs } from './args/FindManyProductArgs';

@TypeGraphQL.Resolver(_of => Product)
export class FindManyProductResolver {
  @TypeGraphQL.Query(_returns => [Product], {
    nullable: false,
  })
  async products(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyProductArgs
  ): Promise<Product[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).product.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
