import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../../helpers';
import { Customer } from '../../../models/Customer';
import { FindManyCustomerArgs } from './args/FindManyCustomerArgs';

@TypeGraphQL.Resolver(_of => Customer)
export class FindManyCustomerResolver {
  @TypeGraphQL.Query(_returns => [Customer], {
    nullable: false,
  })
  async customers(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindManyCustomerArgs
  ): Promise<Customer[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).customer.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
