import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutUsedInInput } from "../inputs/ProductCreateOrConnectWithoutUsedInInput";
import { ProductCreateWithoutUsedInInput } from "../inputs/ProductCreateWithoutUsedInInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductCreateNestedManyWithoutUsedInInput", {})
export class ProductCreateNestedManyWithoutUsedInInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutUsedInInput], {
    nullable: true
  })
  create?: ProductCreateWithoutUsedInInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutUsedInInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutUsedInInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;
}
