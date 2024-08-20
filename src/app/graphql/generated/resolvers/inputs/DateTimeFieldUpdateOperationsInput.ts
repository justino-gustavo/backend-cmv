import * as TypeGraphQL from 'type-graphql';

@TypeGraphQL.InputType('DateTimeFieldUpdateOperationsInput', {})
export class DateTimeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  set?: Date | undefined;
}
