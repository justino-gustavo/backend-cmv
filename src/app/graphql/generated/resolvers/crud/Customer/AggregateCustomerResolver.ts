import type { GraphQLResolveInfo } from 'graphql';
import * as TypeGraphQL from 'type-graphql';
import { getPrismaFromContext, transformInfoIntoPrismaArgs } from '../../../helpers';
import { Customer } from '../../../models/Customer';
import { AggregateCustomer } from '../../outputs/AggregateCustomer';
import { AggregateCustomerArgs } from './args/AggregateCustomerArgs';

@TypeGraphQL.Resolver(_of => Customer)
export class AggregateCustomerResolver {
  @TypeGraphQL.Query(_returns => AggregateCustomer, {
    nullable: false,
  })
  async aggregateCustomer(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateCustomerArgs
  ): Promise<AggregateCustomer> {
    return getPrismaFromContext(ctx).customer.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
