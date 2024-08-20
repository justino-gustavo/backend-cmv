import * as TypeGraphQL from 'type-graphql';
import { CustomerCreateInput } from '../../../inputs/CustomerCreateInput';

@TypeGraphQL.ArgsType()
export class CreateOneCustomerArgs {
  @TypeGraphQL.Field(_type => CustomerCreateInput, {
    nullable: false,
  })
  data!: CustomerCreateInput;
}
