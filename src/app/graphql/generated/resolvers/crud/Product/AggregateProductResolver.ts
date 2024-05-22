import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateProductArgs } from "./args/AggregateProductArgs";
import { Product } from "../../../models/Product";
import { AggregateProduct } from "../../outputs/AggregateProduct";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Product)
export class AggregateProductResolver {
  @TypeGraphQL.Query(_returns => AggregateProduct, {
    nullable: false
  })
  async aggregateProduct(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateProductArgs): Promise<AggregateProduct> {
    return getPrismaFromContext(ctx).product.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
