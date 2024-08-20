import * as TypeGraphQL from 'type-graphql';
import { ProductCreateWithoutUsedInInput } from '../inputs/ProductCreateWithoutUsedInInput';
import { ProductWhereUniqueInput } from '../inputs/ProductWhereUniqueInput';

@TypeGraphQL.InputType('ProductCreateOrConnectWithoutUsedInInput', {})
export class ProductCreateOrConnectWithoutUsedInInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false,
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutUsedInInput, {
    nullable: false,
  })
  create!: ProductCreateWithoutUsedInInput;
}
