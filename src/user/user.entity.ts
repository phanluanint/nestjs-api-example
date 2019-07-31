import { Field, ID, ObjectType } from "type-graphql";
import { Entity, Column, ObjectIdColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(type => ID)
  @ObjectIdColumn()
  _id: string;

  @Field()
  @Column()
  username: string;

  @Column()
  password: string;
}