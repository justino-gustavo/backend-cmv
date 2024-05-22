import type { NonEmptyArray } from 'type-graphql';
import { AuthenticateUserResolver, CreateOneUserResolver } from './crud/user';

export const resolvers: NonEmptyArray<Function> = [CreateOneUserResolver, AuthenticateUserResolver];
