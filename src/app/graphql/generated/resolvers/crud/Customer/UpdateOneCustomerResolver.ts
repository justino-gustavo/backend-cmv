import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../../helpers';
import { Customer } from '../../../models/Customer';
import { UpdateOneCustomerArgs } from './args/UpdateOneCustomerArgs';

@TypeGraphQL.Resolver(_of => Customer)
export class UpdateOneCustomerResolver {
  @TypeGraphQL.Mutation(_returns => Customer, {
    nullable: true,
  })
  async updateOneCustomer(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpdateOneCustomerArgs
  ): Promise<Customer | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).customer.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
