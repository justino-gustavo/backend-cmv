import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../../helpers';
import { Customer } from '../../../models/Customer';
import { UpsertOneCustomerArgs } from './args/UpsertOneCustomerArgs';

@TypeGraphQL.Resolver(_of => Customer)
export class UpsertOneCustomerResolver {
  @TypeGraphQL.Mutation(_returns => Customer, {
    nullable: false,
  })
  async upsertOneCustomer(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: UpsertOneCustomerArgs
  ): Promise<Customer> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).customer.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
