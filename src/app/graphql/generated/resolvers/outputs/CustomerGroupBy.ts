import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerCountAggregate } from "../outputs/CustomerCountAggregate";
import { CustomerMaxAggregate } from "../outputs/CustomerMaxAggregate";
import { CustomerMinAggregate } from "../outputs/CustomerMinAggregate";

@TypeGraphQL.ObjectType("CustomerGroupBy", {})
export class CustomerGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  address!: string | null;

  @TypeGraphQL.Field(_type => CustomerCountAggregate, {
    nullable: true
  })
  _count!: CustomerCountAggregate | null;

  @TypeGraphQL.Field(_type => CustomerMinAggregate, {
    nullable: true
  })
  _min!: CustomerMinAggregate | null;

  @TypeGraphQL.Field(_type => CustomerMaxAggregate, {
    nullable: true
  })
  _max!: CustomerMaxAggregate | null;
}
