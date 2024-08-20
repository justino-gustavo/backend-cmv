import * as TypeGraphQL from 'type-graphql';
import { StringNullableWithAggregatesFilter } from '../inputs/StringNullableWithAggregatesFilter';
import { StringWithAggregatesFilter } from '../inputs/StringWithAggregatesFilter';

@TypeGraphQL.InputType('CustomerScalarWhereWithAggregatesInput', {})
export class CustomerScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CustomerScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: CustomerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: CustomerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CustomerScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: CustomerScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  email?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  phone?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true,
  })
  address?: StringNullableWithAggregatesFilter | undefined;
}
