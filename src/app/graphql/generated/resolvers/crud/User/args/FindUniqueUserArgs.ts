import * as TypeGraphQL from 'type-graphql';
import { UserWhereUniqueInput } from '../../../inputs/UserWhereUniqueInput';

@TypeGraphQL.ArgsType()
export class FindUniqueUserArgs {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false,
  })
  where!: UserWhereUniqueInput;
}
