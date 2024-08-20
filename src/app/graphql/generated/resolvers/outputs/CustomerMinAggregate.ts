import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.ObjectType('CustomerMinAggregate', {})
export class CustomerMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  name!: string | null;

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
