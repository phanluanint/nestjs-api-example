import { Injectable } from '@nestjs/common';
import { UserInput } from './user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(input: UserInput): Promise<User> {
    const user = new User();
    user.username = input.username;
    user.password = input.password;
    return this.userRepository.save(user);
  }
}