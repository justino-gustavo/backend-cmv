import { User } from '@generated/type-graphql';
import { Ctx, Mutation, Resolver } from 'type-graphql';

@Resolver()
export class CreateUserResolver {
  @Mutation(() => User)
  async createSecureUser(@Ctx() ctx: any) {}
}
