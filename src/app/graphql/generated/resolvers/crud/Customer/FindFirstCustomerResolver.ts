import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../../helpers';
import { Customer } from '../../../models/Customer';
import { FindFirstCustomerArgs } from './args/FindFirstCustomerArgs';

@TypeGraphQL.Resolver(_of => Customer)
export class FindFirstCustomerResolver {
  @TypeGraphQL.Query(_returns => Customer, {
    nullable: true,
  })
  async findFirstCustomer(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: FindFirstCustomerArgs
  ): Promise<Customer | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).customer.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
