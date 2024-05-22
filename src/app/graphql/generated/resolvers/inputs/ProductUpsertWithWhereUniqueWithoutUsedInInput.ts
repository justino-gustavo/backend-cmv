import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateWithoutUsedInInput } from "../inputs/ProductCreateWithoutUsedInInput";
import { ProductUpdateWithoutUsedInInput } from "../inputs/ProductUpdateWithoutUsedInInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpsertWithWhereUniqueWithoutUsedInInput", {})
export class ProductUpsertWithWhereUniqueWithoutUsedInInput {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false
  })
  where!: ProductWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProductUpdateWithoutUsedInInput, {
    nullable: false
  })
  update!: ProductUpdateWithoutUsedInInput;

  @TypeGraphQL.Field(_type => ProductCreateWithoutUsedInInput, {
    nullable: false
  })
  create!: ProductCreateWithoutUsedInInput;
}
