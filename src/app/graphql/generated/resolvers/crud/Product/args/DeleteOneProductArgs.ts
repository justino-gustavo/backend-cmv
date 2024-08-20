import * as TypeGraphQL from 'type-graphql';
import { ProductWhereUniqueInput } from '../../../inputs/ProductWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class DeleteOneProductArgs {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false,
  })
  where!: ProductWhereUniqueInput;
}
