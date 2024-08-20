import * as TypeGraphQL from 'type-graphql';
import { ProductScalarWhereInput } from '../inputs/ProductScalarWhereInput';
import { ProductUpdateManyMutationInput } from '../inputs/ProductUpdateManyMutationInput';

@TypeGraphQL.InputType('ProductUpdateManyWithWhereWithoutUsesInput', {})
export class ProductUpdateManyWithWhereWithoutUsesInput {
  @TypeGraphQL.Field(_type => ProductScalarWhereInput, {
    nullable: false,
  })
  where!: ProductScalarWhereInput;

  @TypeGraphQL.Field(_type => ProductUpdateManyMutationInput, {
    nullable: false,
  })
  data!: ProductUpdateManyMutationInput;
}
