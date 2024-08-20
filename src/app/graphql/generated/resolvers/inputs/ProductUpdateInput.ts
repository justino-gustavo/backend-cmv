import * as TypeGraphQL from 'type-graphql';
import { DateTimeFieldUpdateOperationsInput } from '../inputs/DateTimeFieldUpdateOperationsInput';
import { ProductUpdateManyWithoutUsedInNestedInput } from '../inputs/ProductUpdateManyWithoutUsedInNestedInput';
import { ProductUpdateManyWithoutUsesNestedInput } from '../inputs/ProductUpdateManyWithoutUsesNestedInput';
import { StringFieldUpdateOperationsInput } from '../inputs/StringFieldUpdateOperationsInput';

@TypeGraphQL.InputType('ProductUpdateInput', {})
export class ProductUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  description?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true,
  })
  batch?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  producedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true,
  })
  expiredAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateManyWithoutUsedInNestedInput, {
    nullable: true,
  })
  uses?: ProductUpdateManyWithoutUsedInNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProductUpdateManyWithoutUsesNestedInput, {
    nullable: true,
  })
  usedIn?: ProductUpdateManyWithoutUsesNestedInput | undefined;
}
