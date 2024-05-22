import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateOrConnectWithoutUsedInInput } from "../inputs/ProductCreateOrConnectWithoutUsedInInput";
import { ProductCreateWithoutUsedInInput } from "../inputs/ProductCreateWithoutUsedInInput";
import { ProductScalarWhereInput } from "../inputs/ProductScalarWhereInput";
import { ProductUpdateManyWithWhereWithoutUsedInInput } from "../inputs/ProductUpdateManyWithWhereWithoutUsedInInput";
import { ProductUpdateWithWhereUniqueWithoutUsedInInput } from "../inputs/ProductUpdateWithWhereUniqueWithoutUsedInInput";
import { ProductUpsertWithWhereUniqueWithoutUsedInInput } from "../inputs/ProductUpsertWithWhereUniqueWithoutUsedInInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";

@TypeGraphQL.InputType("ProductUpdateManyWithoutUsedInNestedInput", {})
export class ProductUpdateManyWithoutUsedInNestedInput {
  @TypeGraphQL.Field(_type => [ProductCreateWithoutUsedInInput], {
    nullable: true
  })
  create?: ProductCreateWithoutUsedInInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductCreateOrConnectWithoutUsedInInput], {
    nullable: true
  })
  connectOrCreate?: ProductCreateOrConnectWithoutUsedInInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpsertWithWhereUniqueWithoutUsedInInput], {
    nullable: true
  })
  upsert?: ProductUpsertWithWhereUniqueWithoutUsedInInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [ProductUpdateWithWhereUniqueWithoutUsedInInput], {
    nullable: true
  })
  update?: ProductUpdateWithWhereUniqueWithoutUsedInInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductUpdateManyWithWhereWithoutUsedInInput], {
    nullable: true
  })
  updateMany?: ProductUpdateManyWithWhereWithoutUsedInInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProductScalarWhereInput[] | undefined;
}
