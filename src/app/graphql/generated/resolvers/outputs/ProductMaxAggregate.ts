import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.ObjectType('ProductMaxAggregate', {})
export class ProductMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  batch!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  producedAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  expiredAt!: Date | null;
}
