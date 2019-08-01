import { Injectable } from '@nestjs/common';
import { PostInput } from './post.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { User } from '../user/user.entity';
import { Repository } from 'typeorm';
import { UserInput } from '../user/user.input';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async create(input: PostInput, author: UserInput): Promise<Post> {
    const user = new User();
    for (const key in author) {
      user[key] = author[key];
    }
    await this.userRepository.save(user);
    const post = new Post();
    for (const key in input) {
      post[key] = input[key];
    }
    post.author = user;
    return this.postRepository.save(post);
  }
}
