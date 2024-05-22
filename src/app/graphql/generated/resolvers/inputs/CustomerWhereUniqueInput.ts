import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("CustomerWhereUniqueInput", {})
export class CustomerWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone?: string | undefined;

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
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  address?: StringNullableFilter | undefined;
}
