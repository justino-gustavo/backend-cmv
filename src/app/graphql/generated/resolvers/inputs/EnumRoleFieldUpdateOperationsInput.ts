import * as TypeGraphQL from 'type-graphql';
import { Role } from '../../enums/Role';

@TypeGraphQL.InputType('EnumRoleFieldUpdateOperationsInput', {})
export class EnumRoleFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Role, {
    nullable: true,
  })
  set?: 'USER' | 'OPERATOR' | 'ADMIN' | undefined;
}
