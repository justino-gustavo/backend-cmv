import * as TypeGraphQL from 'type-graphql';
import { ProductUpdateWithoutUsesInput } from '../inputs/ProductUpdateWithoutUsesInput';
import { ProductWhereUniqueInput } from '../inputs/ProductWhereUniqueInput';

@TypeGraphQL.InputType('ProductUpdateWithWhereUniqueWithoutUsesInput', {})
export class ProductUpdateWithWhereUniqueWithoutUsesInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false,
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutUsesInput, {
    nullable: false,
  })
  data!: ProductUpdateWithoutUsesInput;
}
