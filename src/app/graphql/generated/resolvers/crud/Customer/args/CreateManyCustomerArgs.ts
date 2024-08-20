import * as TypeGraphQL from 'type-graphql';
import { CustomerCreateManyInput } from '../../../inputs/CustomerCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyCustomerArgs {
  @TypeGraphQL.Field(_type => [CustomerCreateManyInput], {
    nullable: false,
  })
  data!: CustomerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
