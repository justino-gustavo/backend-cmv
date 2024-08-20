import * as TypeGraphQL from 'type-graphql';
import { ProductScalarFieldEnum } from '../../../../enums/ProductScalarFieldEnum';
import { ProductOrderByWithRelationInput } from '../../../inputs/ProductOrderByWithRelationInput';
import { ProductWhereInput } from '../../../inputs/ProductWhereInput';
import { ProductWhereUniqueInput } from '../../../inputs/ProductWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class FindFirstProductOrThrowArgs {
  @TypeGraphQL.Field(_type => ProductWhereInput, {
    nullable: true,
  })
  where?: ProductWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ProductOrderByWithRelationInput], {
    nullable: true,
  })
  orderBy?: ProductOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ProductWhereUniqueInput, {
    nullable: true,
  })
  cursor?: ProductWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true,
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ProductScalarFieldEnum], {
    nullable: true,
  })
  distinct?:
    | Array<
        | 'id'
        | 'createdAt'
        | 'updatedAt'
        | 'name'
        | 'description'
        | 'batch'
        | 'producedAt'
        | 'expiredAt'
        | 'userId'
      >
    | undefined;
}
