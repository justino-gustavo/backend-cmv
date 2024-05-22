import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ProductListRelationFilter } from "../inputs/ProductListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ProductWhereInput", {})
export class ProductWhereInput {
  @TypeGraphQL.Field(_type => [ProductWhereInput], {
    nullable: true
  })
  AND?: ProductWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereInput], {
    nullable: true
  })
  OR?: ProductWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductWhereInput], {
    nullable: true
  })
  NOT?: ProductWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  batch?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  producedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  expiredAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => ProductListRelationFilter, {
    nullable: true
  })
  uses?: ProductListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProductListRelationFilter, {
    nullable: true
  })
  usedIn?: ProductListRelationFilter | undefined;
}
