import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProductCreateNestedManyWithoutUsesInput } from "../inputs/ProductCreateNestedManyWithoutUsesInput";

@TypeGraphQL.InputType("ProductCreateWithoutUsesInput", {})
export class ProductCreateWithoutUsesInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  batch!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  producedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expiredAt!: Date;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutUsesInput, {
    nullable: true
  })
  usedIn?: typeof ProductCreateNestedManyWithoutUsesInput | undefined;
}
