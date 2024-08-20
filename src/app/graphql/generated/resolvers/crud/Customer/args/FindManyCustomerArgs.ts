import * as TypeGraphQL from 'type-graphql';
import { CustomerScalarFieldEnum } from '../../../../enums/CustomerScalarFieldEnum';
import { CustomerOrderByWithRelationInput } from '../../../inputs/CustomerOrderByWithRelationInput';
import { CustomerWhereInput } from '../../../inputs/CustomerWhereInput';
import { CustomerWhereUniqueInput } from '../../../inputs/CustomerWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class FindManyCustomerArgs {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true,
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CustomerOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: CustomerOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CustomerWhereUniqueInput, {
    nullable: true,
  })
  cursor?: CustomerWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [CustomerScalarFieldEnum], {
    nullable: true,
  })
  distinct?: Array<'id' | 'createdAt' | 'name' | 'email' | 'phone' | 'address'> | undefined;
}
