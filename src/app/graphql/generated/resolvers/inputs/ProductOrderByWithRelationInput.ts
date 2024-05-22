import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductOrderByRelationAggregateInput } from "../inputs/ProductOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ProductOrderByWithRelationInput", {})
export class ProductOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  batch?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  producedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  expiredAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByRelationAggregateInput, {
    nullable: true
  })
  uses?: ProductOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProductOrderByRelationAggregateInput, {
    nullable: true
  })
  usedIn?: ProductOrderByRelationAggregateInput | undefined;
}
