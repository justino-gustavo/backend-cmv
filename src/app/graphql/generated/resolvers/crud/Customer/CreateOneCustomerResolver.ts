import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
import {
  getPrismaFromContext,
  transformCountFieldIntoSelectRelationsCount,
  transformInfoIntoPrismaArgs,
} from '../../../helpers';
import { Customer } from '../../../models/Customer';
import { CreateOneCustomerArgs } from './args/CreateOneCustomerArgs';

@TypeGraphQL.Resolver(_of => Customer)
export class CreateOneCustomerResolver {
  @TypeGraphQL.Mutation(_returns => Customer, {
    nullable: false,
  })
  async createOneCustomer(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: CreateOneCustomerArgs
  ): Promise<Customer> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).customer.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
