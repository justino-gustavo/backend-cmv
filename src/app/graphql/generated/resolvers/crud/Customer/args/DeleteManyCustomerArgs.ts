import * as TypeGraphQL from 'type-graphql';
import { CustomerWhereInput } from '../../../inputs/CustomerWhereInput';

@TypeGraphQL.ArgsType()
export class DeleteManyCustomerArgs {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true,
  })
  where?: CustomerWhereInput | undefined;
}
