import * as TypeGraphQL from 'type-graphql';
import { ProductUpdateWithoutUsedInInput } from '../inputs/ProductUpdateWithoutUsedInInput';
import { ProductWhereUniqueInput } from '../inputs/ProductWhereUniqueInput';

@TypeGraphQL.InputType('ProductUpdateWithWhereUniqueWithoutUsedInInput', {})
export class ProductUpdateWithWhereUniqueWithoutUsedInInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false,
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutUsedInInput, {
    nullable: false,
  })
  data!: ProductUpdateWithoutUsedInInput;
}
