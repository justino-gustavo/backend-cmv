import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CustomerWhereInput", {})
export class CustomerWhereInput {
  @TypeGraphQL.Field(_type => [CustomerWhereInput], {
    nullable: true
  })
  AND?: CustomerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereInput], {
    nullable: true
  })
  OR?: CustomerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerWhereInput], {
    nullable: true
  })
  NOT?: CustomerWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  email?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  phone?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  address?: StringNullableFilter | undefined;
}
