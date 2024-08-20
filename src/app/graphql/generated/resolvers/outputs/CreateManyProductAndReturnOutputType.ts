import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.ObjectType('CreateManyProductAndReturnOutputType', {})
export class CreateManyProductAndReturnOutputType {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  batch!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  producedAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  expiredAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userId!: string;
}
