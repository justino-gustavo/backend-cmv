import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../../helpers';
import { Product } from '../../../models/Product';
import { FindFirstProductOrThrowArgs } from './args/FindFirstProductOrThrowArgs';

@TypeGraphQL.Resolver(_of => Product)
export class FindFirstProductOrThrowResolver {
  @TypeGraphQL.Query(_returns => Product, {
    nullable: true,
  })
  async findFirstProductOrThrow(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstProductOrThrowArgs
  ): Promise<Product | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).product.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
