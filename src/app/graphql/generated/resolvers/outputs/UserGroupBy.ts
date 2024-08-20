import * as TypeGraphQL from 'type-graphql';
import { Role } from '../../enums/Role';
import { UserCountAggregate } from '../outputs/UserCountAggregate';
import { UserMaxAggregate } from '../outputs/UserMaxAggregate';
import { UserMinAggregate } from '../outputs/UserMinAggregate';

@TypeGraphQL.ObjectType('UserGroupBy', {})
export class UserGroupBy {
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

  @TypeGraphQL.Field(_type => UserCountAggregate, {
    nullable: true,
  })
  _count!: UserCountAggregate | null;

  @TypeGraphQL.Field(_type => UserMinAggregate, {
    nullable: true,
  })
  _min!: UserMinAggregate | null;

  @TypeGraphQL.Field(_type => UserMaxAggregate, {
    nullable: true,
  })
  _max!: UserMaxAggregate | null;
}
