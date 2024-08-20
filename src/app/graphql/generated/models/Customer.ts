import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.ObjectType('Customer', {})
export class Customer {
  @TypeGraphQL.Field(_type => TypeGraphQL.ID, {
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
  email?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  phone?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  address?: string | null;
}
