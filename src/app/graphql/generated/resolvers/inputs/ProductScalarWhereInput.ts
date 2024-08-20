import * as TypeGraphQL from 'type-graphql';
import { DateTimeFilter } from '../inputs/DateTimeFilter';
import { StringFilter } from '../inputs/StringFilter';

@TypeGraphQL.InputType('ProductScalarWhereInput', {})
export class ProductScalarWhereInput {
  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true,
  })
  AND?: ProductScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true,
  })
  OR?: ProductScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarWhereInput], {
    nullable: true,
  })
  NOT?: ProductScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
  })
  batch?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  producedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
  })
  expiredAt?: DateTimeFilter | undefined;
}
