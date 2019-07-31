import { InputType, Field } from "type-graphql";

import { Post } from "./post.entity";

@InputType()
export class PostInput implements Partial<Post> {
  @Field()
  title: string;

  @Field()
  content: string;

  @Field()
  author: string;

  // user: string;
}