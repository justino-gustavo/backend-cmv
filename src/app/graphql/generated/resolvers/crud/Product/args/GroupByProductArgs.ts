import * as TypeGraphQL from 'type-graphql';
import { ProductScalarFieldEnum } from '../../../../enums/ProductScalarFieldEnum';
import { ProductOrderByWithAggregationInput } from '../../../inputs/ProductOrderByWithAggregationInput';
import { ProductScalarWhereWithAggregatesInput } from '../../../inputs/ProductScalarWhereWithAggregatesInput';
import { ProductWhereInput } from '../../../inputs/ProductWhereInput';

@TypeGraphQL.ArgsType()
export class GroupByProductArgs {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true,
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProductOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: ProductOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarFieldEnum], {
    nullable: false,
  })
  by!: Array<
    | 'id'
    | 'createdAt'
    | 'updatedAt'
    | 'name'
    | 'description'
    | 'batch'
    | 'producedAt'
    | 'expiredAt'
    | 'userId'
  >;

  @TypeGraphQL.Field(_type => ProductScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: ProductScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;
}
