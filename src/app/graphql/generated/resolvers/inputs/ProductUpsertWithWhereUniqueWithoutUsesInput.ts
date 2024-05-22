import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutUsesInput } from "../inputs/ProductCreateWithoutUsesInput";
import { ProductUpdateWithoutUsesInput } from "../inputs/ProductUpdateWithoutUsesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutUsesInput", {})
export class ProductUpsertWithWhereUniqueWithoutUsesInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutUsesInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutUsesInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutUsesInput, {
    nullable: false
  })
  create!: ProductCreateWithoutUsesInput;
}
