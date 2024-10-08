import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.ObjectType('AffectedRowsOutput', {})
export class AffectedRowsOutput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
  })
  count!: number;
}
