import * as TypeGraphQL from 'type-graphql';
import { ProductCountUsedInArgs } from './args/ProductCountUsedInArgs';
import { ProductCountUsesArgs } from './args/ProductCountUsesArgs';

@TypeGraphQL.ObjectType('ProductCount', {})
export class ProductCount {
  uses!: number;
  usedIn!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: 'uses',
    nullable: false,
  })
  getUses(
    @TypeGraphQL.Root() root: ProductCount,
    @TypeGraphQL.Args() args: ProductCountUsesArgs
  ): number {
    return root.uses;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: 'usedIn',
    nullable: false,
  })
  getUsedIn(
    @TypeGraphQL.Root() root: ProductCount,
    @TypeGraphQL.Args() args: ProductCountUsedInArgs
  ): number {
    return root.usedIn;
  }
}
