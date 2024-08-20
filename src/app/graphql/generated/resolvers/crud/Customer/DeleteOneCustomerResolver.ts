import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../../helpers';
import { Customer } from '../../../models/Customer';
import { DeleteOneCustomerArgs } from './args/DeleteOneCustomerArgs';

@TypeGraphQL.Resolver(_of => Customer)
export class DeleteOneCustomerResolver {
  @TypeGraphQL.Mutation(_returns => Customer, {
    nullable: true,
  })
  async deleteOneCustomer(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: DeleteOneCustomerArgs
  ): Promise<Customer | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).customer.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
