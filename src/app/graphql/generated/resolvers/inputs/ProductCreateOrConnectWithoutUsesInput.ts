import * as TypeGraphQL from 'type-graphql';
import { ProductCreateWithoutUsesInput } from '../inputs/ProductCreateWithoutUsesInput';
import { ProductWhereUniqueInput } from '../inputs/ProductWhereUniqueInput';

@TypeGraphQL.InputType('ProductCreateOrConnectWithoutUsesInput', {})
export class ProductCreateOrConnectWithoutUsesInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false,
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutUsesInput, {
    nullable: false,
  })
  create!: ProductCreateWithoutUsesInput;
}
