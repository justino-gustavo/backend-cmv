import { beforeEach, describe, expect, test } from 'bun:test';

import { InMemoryUserRepository } from '../../../infra/repositories/inMemory/userRepository';
import { CreateUserUseCase } from './createUser';

import { InMemoryCustomerRepository } from '../../../infra/repositories/inMemory/customerRepository';
import type { CustomerRepository } from '../../repositories/customerRepository';
import type { UserRepository } from '../../repositories/userRepository';
import type { User } from '../entities/user';

describe('CreateUser use case', () => {
  let userRepository: UserRepository;
  let customerRepository: CustomerRepository;
  let createUser: CreateUserUseCase;

  const userProps: User.Create = {
    name: 'John Doe',
    userName: 'john_doe',
    email: 'test@mail.com',
    password: '123456',
  };

  const eachInvalidUserProps = [
    ['name', { ...userProps, name: '' }],
    ['userName', { ...userProps, userName: '' }],
    ['email', { ...userProps, email: '' }],
    ['password', { ...userProps, password: '' }],
  ];

  beforeEach(() => {
    userRepository = new InMemoryUserRepository();
    customerRepository = new InMemoryCustomerRepository();
    createUser = new CreateUserUseCase(userRepository, customerRepository);
  });

  test('should create a user', async () => {
    const user = createUser.execute(userProps);

    expect(user).resolves.toHaveProperty('id', expect.any(String));
    expect(user).resolves.toContainKeys(Object.keys(userProps));
  });

  test('should not create a user if already exists', async () => {
    await createUser.execute(userProps);

    expect(createUser.execute(userProps)).rejects.toThrowError('User already exists');
  });

  test.each(eachInvalidUserProps)(
    'should not create a user if %s is invalid',
    async (_, userData) => {
      const user = createUser.execute(userData as User.Create);

      expect(user).rejects.toThrowError('Invalid user data');
    }
  );

  test('should create a customer when creating a user', async () => {
    const user = createUser.execute(userProps);

    expect(user).resolves.toHaveProperty('id', expect.any(String));
    expect(user).resolves.toContainKeys(Object.keys(userProps));

    const customer = customerRepository.getCustomerByUniqueKey({ email: userProps.email });

    expect(customer).resolves.toHaveProperty('id', expect.stringContaining((await user).id));
    expect(customer).resolves.toContainKeys(['name', 'email', 'phone']);
  });
});
