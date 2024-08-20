import * as TypeGraphQL from 'type-graphql';
import { ProductCreateInput } from '../../../inputs/ProductCreateInput';

@TypeGraphQL.ArgsType()
export class CreateOneProductArgs {
  @TypeGraphQL.Field(_type => ProductCreateInput, {
    nullable: false,
  })
  data!: ProductCreateInput;
}
