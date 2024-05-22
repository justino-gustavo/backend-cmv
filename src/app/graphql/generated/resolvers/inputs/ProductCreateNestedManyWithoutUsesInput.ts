import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutUsesInput } from "../inputs/ProductCreateOrConnectWithoutUsesInput";
import { ProductCreateWithoutUsesInput } from "../inputs/ProductCreateWithoutUsesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedManyWithoutUsesInput", {})
export class ProductCreateNestedManyWithoutUsesInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutUsesInput], {
    nullable: true
  })
  create?: ProductCreateWithoutUsesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutUsesInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutUsesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
