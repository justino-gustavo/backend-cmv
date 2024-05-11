import { User, type UserProps } from '../../entities/user';
import type { UserRepository } from '../../repositories/userRepository';

type UserRequest = UserProps;

export class CreateUserService {
  private userRepo;

  constructor(userRepository: UserRepository) {
    this.userRepo = userRepository;
  }

  async execute({ id, name, userName, email, phone, password }: UserRequest) {
    const exists = await this.userRepo.getUserByUniqueKey(id || userName || email || phone);

    if (exists) {
      throw new Error('User already exists.');
    }
    if (!name || !userName || !email || !password) {
      throw new Error('Invalid fields.');
    }

    const userCreate = User.create({ name, userName, email, phone, password });
    const user = await this.userRepo.createUser(userCreate.getProps);

    return user;
  }
}
