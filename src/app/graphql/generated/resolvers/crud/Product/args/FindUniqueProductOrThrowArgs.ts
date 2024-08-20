import * as TypeGraphQL from 'type-graphql';
import { ProductWhereUniqueInput } from '../../../inputs/ProductWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class FindUniqueProductOrThrowArgs {
  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: false,
  })
  where!: ProductWhereUniqueInput;
}
