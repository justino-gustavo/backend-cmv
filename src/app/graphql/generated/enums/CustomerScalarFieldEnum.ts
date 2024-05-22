import * as TypeGraphQL from "type-graphql";

export enum CustomerScalarFieldEnum {
  id = "id",
  createdAt = "createdAt",
  name = "name",
  email = "email",
  phone = "phone",
  address = "address"
}
TypeGraphQL.registerEnumType(CustomerScalarFieldEnum, {
  name: "CustomerScalarFieldEnum",
  description: undefined,
});
