import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './post.entity';
import { PostInput } from './post.input';
import { UserInput } from '../user/user.input';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => String)
  async hello() {
    return await 'world';
  }

  @Query(() => [Post])
  async posts() {
    return this.postService.findAll();
  }

  @Mutation(() => Post)
  async createPost(
    @Args('input') input: PostInput,
    @Args('author') author: UserInput,
  ): Promise<Post> {
    return await this.postService.create(input, author);
  }
}
