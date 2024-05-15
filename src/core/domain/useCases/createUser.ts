import type { CustomerRepository } from '../../repositories/customerRepository';
import type { UserRepository } from '../../repositories/userRepository';
import { Customer } from '../entities/customer';
import { User } from '../entities/user';

export class CreateUserUseCase {
  private userRepository: UserRepository;
  private customerRepository: CustomerRepository;

  constructor(userRepository: UserRepository, customerRepository: CustomerRepository) {
    this.userRepository = userRepository;
    this.customerRepository = customerRepository;
  }

  async execute(data: User.Create) {
    const userExists = await this.userRepository.getUserByUniqueKey(data);

    if (userExists) {
      throw new Error('User already exists');
    }
    if (!data.name || !data.userName || !data.email || !data.password) {
      throw new Error('Invalid user data');
    }

    const userCreate = new User(data);
    const user = await this.userRepository.createUser(userCreate.getProps);

    const customerCreate = new Customer({
      name: data.name,
      email: data.email,
      phone: data.phone,
    });
    customerCreate.setId = user.id;
    await this.customerRepository.createCustomer(customerCreate.getProps);

    return user;
  }
}
