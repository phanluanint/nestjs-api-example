import { Field, ID, ObjectType } from 'type-graphql';
import { Entity, Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../user/user.entity';
import { Lazy } from '../helpers';

@ObjectType()
@Entity()
export class Post {
  @Field(type => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  content: string;

  @ManyToOne(type => User, user => user.posts, {lazy: true})
  @Field(type => User, {nullable: true})
  author: Lazy<User>;
}
