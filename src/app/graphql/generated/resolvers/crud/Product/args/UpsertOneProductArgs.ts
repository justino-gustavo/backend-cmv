import * as TypeGraphQL from 'type-graphql';
import { ProductCreateInput } from '../../../inputs/ProductCreateInput';
import { ProductUpdateInput } from '../../../inputs/ProductUpdateInput';
import { ProductWhereUniqueInput } from '../../../inputs/ProductWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class UpsertOneProductArgs {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false,
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateInput, {
    nullable: false,
  })
  create!: ProductCreateInput;

  @TypeGraphQL.Field(_type => ProductUpdateInput, {
    nullable: false,
  })
  update!: ProductUpdateInput;
}
