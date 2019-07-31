import { InputType, Field } from "type-graphql";

import { User } from "./user.entity";

@InputType()
export class UserInput implements Partial<User> {
  @Field()
  username: string;

  @Field()
  password: string;
}