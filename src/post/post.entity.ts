import { Field, ID, ObjectType } from "type-graphql";
import { Entity, Column, ObjectIdColumn, ManyToOne} from 'typeorm';
// import {User} from "../User/user.entity";
// import { Lazy } from "../helpers";

@ObjectType()
@Entity()
export class Post {
  @Field(type => ID)
  @ObjectIdColumn()
  _id: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  content: string;

  @Field()
  @Column()
  author: string;

  // @ManyToOne(type => User, user => user._id)
  // user: Lazy<User[]>;
}