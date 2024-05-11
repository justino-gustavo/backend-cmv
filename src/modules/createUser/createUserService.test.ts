import { beforeEach, describe, expect, test } from 'bun:test';
import type { UserProps } from '../../entities/user';
import { InMemoryUserRepository } from '../../repositories/inMemory/userRepository';
import type { UserRepository } from '../../repositories/userRepository';
import { CreateUserService } from './createUserService';

describe('create user', () => {
  let userRepository: UserRepository;
  let createUserService: CreateUserService;

  const userData: UserProps = {
    name: 'John Doe',
    userName: 'johndoe',
    email: 'johndoe@test.com',
    password: 'asdf1234',
  };
  const exceptRequireds = [
    ['name', { ...userData, name: '' }],
    ['userName', { ...userData, userName: '' }],
    ['email', { ...userData, email: '' }],
    ['password', { ...userData, password: '' }],
  ];

  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    createUserService = new CreateUserService(userRepository);
  });

  test('should be able to create new user', async () => {
    const user = createUserService.execute(userData);

    expect(user).resolves.toHaveProperty('id');
    expect(user).resolves.toContainKeys(Object.keys(userData));
  });
  test('should not be able to create existing user', async () => {
    await createUserService.execute(userData);
    const user = createUserService.execute(userData);

    expect(user).rejects.toThrowError('User already exists.');
  });
  test.each(exceptRequireds)('should throw an error for invalid %s', async (_field, data) => {
    const user = createUserService.execute(data as UserProps);

    expect(user).rejects.toThrowError(`Invalid fields.`);
  });
});
