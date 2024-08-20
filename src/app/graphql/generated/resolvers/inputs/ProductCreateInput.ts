import * as TypeGraphQL from 'type-graphql';
import { ProductCreateNestedManyWithoutUsedInInput } from '../inputs/ProductCreateNestedManyWithoutUsedInInput';
import { ProductCreateNestedManyWithoutUsesInput } from '../inputs/ProductCreateNestedManyWithoutUsesInput';

@TypeGraphQL.InputType('ProductCreateInput', {})
export class ProductCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id?: string | undefined;

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

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutUsedInInput, {
    nullable: true,
  })
  uses?: ProductCreateNestedManyWithoutUsedInInput | undefined;

  @TypeGraphQL.Field(_type => ProductCreateNestedManyWithoutUsesInput, {
    nullable: true,
  })
  usedIn?: ProductCreateNestedManyWithoutUsesInput | undefined;
}
