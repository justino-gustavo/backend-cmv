import { beforeAll, beforeEach, describe, expect, test } from 'bun:test';

import { AuthRepository, UserRepository } from '@infra/repositories/inMemory';
import { AuthService } from '@infra/services/AuthService';
import { CreateUser } from './CreateUser';

describe('CreateUser', () => {
  let userRepo: UserRepository;
  let authRepo: AuthRepository;
  let authService: AuthService;
  let createUser: CreateUser;
  let user = {
    name: 'Test User',
    userName: 'testuser',
    email: 'teste@mail.com',
    password: 'Secure@Password1',
  };

  beforeEach(() => {
    userRepo = new UserRepository();
    authRepo = new AuthRepository();
    authService = new AuthService(authRepo, userRepo);
  });

  beforeAll(() => {
    userRepo = new UserRepository();
    authRepo = new AuthRepository();
    authService = new AuthService(authRepo, userRepo);
    createUser = new CreateUser(userRepo, authService);
  });

  test('should create a new user', async () => {
    // Act
    const result = await createUser.execute(user);

    // Assert
    expect(result.isRight).toBeTrue();
    expect(result.value).toHaveProperty('id');
  });

  test('should not create duplicate user', async () => {
    // Act
    await createUser.execute(user);
    const result = await createUser.execute(user);

    // Assert
    expect(result.isLeft).toBeTrue();
    expect(result.value).toBeInstanceOf(Error);
    expect(result.value.message).toBe('User already exists');
  });

  test('should not create user with invalid data', async () => {
    // Arrange
    user = { ...user, name: '' };

    // Act
    const result = await createUser.execute(user);

    // Assert
    expect(result.isLeft).toBeTrue();
    expect(result.value).toBeInstanceOf(Error);
    expect(result.value.message).toBe('Name is required');
  });
});
