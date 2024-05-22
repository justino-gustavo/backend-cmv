import * as TypeGraphQL from 'type-graphql';
import { ProductWhereInput } from '../inputs/ProductWhereInput';

@TypeGraphQL.InputType('ProductListRelationFilter', {})
export class ProductListRelationFilter {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true,
  })
  every?: typeof ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true,
  })
  some?: typeof ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true,
  })
  none?: typeof ProductWhereInput | undefined;
}
