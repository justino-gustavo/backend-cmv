import * as TypeGraphQL from 'type-graphql';
import { ProductCreateManyInput } from '../../../inputs/ProductCreateManyInput';

@TypeGraphQL.ArgsType()
export class CreateManyProductArgs {
  @TypeGraphQL.Field(_type => [ProductCreateManyInput], {
    nullable: false,
  })
  data!: ProductCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
  })
  skipDuplicates?: boolean | undefined;
}
