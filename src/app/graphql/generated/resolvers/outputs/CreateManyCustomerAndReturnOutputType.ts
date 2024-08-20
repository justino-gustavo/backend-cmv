import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.ObjectType('CreateManyCustomerAndReturnOutputType', {})
export class CreateManyCustomerAndReturnOutputType {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  address!: string | null;
}
