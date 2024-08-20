import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.InputType('CustomerCreateInput', {})
export class CustomerCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  email?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  phone?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  address?: string | undefined;
}
