import { beforeAll, beforeEach, describe, expect, test } from 'bun:test';

import { CreateUser } from '@core/domain/useCases';
import type { IAuthService } from '@core/services';
import { AuthRepository, UserRepository } from '@infra/repositories/inMemory';
import { AuthService } from './AuthService';

type User = IAuthService.AuthInput & IAuthService.AuthOutput;

describe('AuthService', () => {
  let userRepo: UserRepository;
  let authRepo: AuthRepository;
  let authService: AuthService;
  let user = {
    name: 'Test User',
    userName: 'testuser',
    email: 'teste@mail.com',
    password: 'Secure@Password1',
  } as User;

  beforeEach(() => {
    authRepo = new AuthRepository();
    authService = new AuthService(authRepo, userRepo);
  });

  beforeAll(async () => {
    userRepo = new UserRepository();
    authRepo = new AuthRepository();
    authService = new AuthService(authRepo, userRepo);
    const createUser = new CreateUser(userRepo, authService);

    const create = await createUser.execute(user);

    create.isRight ? (user = create.value) : null;
  });

  test('should authenticate user with valid credentials', async () => {
    // Arrange
    const input = { userName: 'testuser', password: 'Secure@Password1' };

    // Act
    const result = await authService.authenticateUser(input, input.password);
    result.isRight ? (user = result.value) : null;

    // Assert
    expect(result.isRight).toBeTrue();
    expect(result.value).toHaveProperty('token');
  });

  test('should not authenticate user with invalid credentials', async () => {
    // Arrange
    const input = { ...user, password: 'InvalidPassword' };

    // Act
    const result = await authService.authenticateUser(input, input.password);

    // Assert
    expect(result.isLeft).toBeTrue();
    expect(result.value).toBeInstanceOf(Error);
    expect(result.value.message).toBe('Bad credentials');
  });

  test('should check user with valid token', async () => {
    // Arrange
    const input = user;

    // Act
    const result = await authService.checkUser(input);

    // Assert
    expect(result.isRight).toBeTrue();
    expect(result.value).toBeString();
  });

  test('should not check user with invalid token', async () => {
    // Arrange
    const input = { ...user, token: 'invalidtoken' };

    // Act
    const result = await authService.checkUser(input);

    // Assert
    expect(result.isLeft).toBeTrue();
    expect(result.value).toBeInstanceOf(Error);
    expect(result.value.message).toBe('Invalid token');
  });
});
