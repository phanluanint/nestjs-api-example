import { Field, ID, ObjectType } from 'type-graphql';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Lazy } from '../helpers';
import { Post } from '../post/post.entity';

@ObjectType()
@Entity()
export class User {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  username: string;

  @Column()
  password: string;

  @OneToMany(type => Post, post => post.author, {lazy: true, nullable: true})
  @Field(type => [Post], {nullable: true})
  posts: Lazy<Post[]>;
}
