import * as TypeGraphQL from 'type-graphql';
import { Role } from '../../enums/Role';

@TypeGraphQL.ObjectType('UserMinAggregate', {})
export class UserMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  createdAt!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
  })
  updatedAt!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  userName!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  email!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  phone!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
  })
  password!: string | null;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true,
  })
  role!: 'USER' | 'OPERATOR' | 'ADMIN' | null;
}
