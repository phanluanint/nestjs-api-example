import { Injectable } from '@nestjs/common';
import { PostInput } from './post.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { MongoRepository } from 'typeorm';
import { ObjectID } from 'mongodb';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: MongoRepository<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async create(input: PostInput): Promise<Post> {
    const post = new Post();
    for (let key in input) {
      post[key] = input[key]
    }
    return this.postRepository.save(post);
  }
}