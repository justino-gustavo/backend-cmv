import * as TypeGraphQL from 'type-graphql';
import { Role } from '../../enums/Role';

@TypeGraphQL.ObjectType('CreateManyUserAndReturnOutputType', {})
export class CreateManyUserAndReturnOutputType {
  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  id!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false,
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  userName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
  })
  password!: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false,
  })
  role!: 'USER' | 'OPERATOR' | 'ADMIN';
}
