import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutUsesInput } from "../inputs/ProductCreateOrConnectWithoutUsesInput";
import { ProductCreateWithoutUsesInput } from "../inputs/ProductCreateWithoutUsesInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutUsesInput } from "../inputs/ProductUpdateManyWithWhereWithoutUsesInput";
import { ProductUpdateWithWhereUniqueWithoutUsesInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutUsesInput";
import { ProductUpsertWithWhereUniqueWithoutUsesInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutUsesInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateManyWithoutUsesNestedInput", {})
export class ProductUpdateManyWithoutUsesNestedInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutUsesInput], {
    nullable: true
  })
  create?: ProductCreateWithoutUsesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutUsesInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutUsesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutUsesInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutUsesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  set?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  delete?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereUniqueInput], {
    nullable: true
  })
  connect?: ProductWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutUsesInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutUsesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutUsesInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutUsesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
