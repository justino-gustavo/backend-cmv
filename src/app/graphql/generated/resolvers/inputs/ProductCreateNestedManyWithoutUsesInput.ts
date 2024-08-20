import * as TypeGraphQL from 'type-graphql';
import { ProductCreateOrConnectWithoutUsesInput } from '../inputs/ProductCreateOrConnectWithoutUsesInput';
import { ProductCreateWithoutUsesInput } from '../inputs/ProductCreateWithoutUsesInput';
import { ProductWhereUniqueInput } from '../inputs/ProductWhereUniqueInput';

@TypeGraphQL.InputType('ProductCreateNestedManyWithoutUsesInput', {})
export class ProductCreateNestedManyWithoutUsesInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutUsesInput], {
    nullable: true,
  })
  create?: ProductCreateWithoutUsesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutUsesInput], {
    nullable: true,
  })
  connectOrCreate?: ProductCreateOrConnectWithoutUsesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true,
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
