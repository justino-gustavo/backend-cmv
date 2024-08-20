import * as TypeGraphQL from 'type-graphql';
import { DateTimeWithAggregatesFilter } from '../inputs/DateTimeWithAggregatesFilter';
import { StringWithAggregatesFilter } from '../inputs/StringWithAggregatesFilter';

@TypeGraphQL.InputType('ProductScalarWhereWithAggregatesInput', {})
export class ProductScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ProductScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: ProductScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: ProductScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: ProductScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  description?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true,
  })
  batch?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  producedAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true,
  })
  expiredAt?: DateTimeWithAggregatesFilter | undefined;
}
