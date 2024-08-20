import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../../helpers';
import { Product } from '../../../models/Product';
import { DeleteOneProductArgs } from './args/DeleteOneProductArgs';

@TypeGraphQL.Resolver(_of => Product)
export class DeleteOneProductResolver {
  @TypeGraphQL.Mutation(_returns => Product, {
    nullable: true,
  })
  async deleteOneProduct(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneProductArgs
  ): Promise<Product | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).product.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
