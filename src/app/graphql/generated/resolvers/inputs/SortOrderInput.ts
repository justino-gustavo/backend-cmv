import * as TypeGraphQL from 'type-graphql';
import { NullsOrder } from '../../enums/NullsOrder';
import { SortOrder } from '../../enums/SortOrder';

@TypeGraphQL.InputType('SortOrderInput', {})
export class SortOrderInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: false,
  })
  sort!: 'asc' | 'desc';

  @TypeGraphQL.Field(_type => NullsOrder, {
    nullable: true,
  })
  nulls?: 'first' | 'last' | undefined;
}
