import {ObjectID, ObjectIdColumn, Column, Entity } from 'typeorm';

@Entity()
export class Client{

    @ObjectIdColumn()
    id:ObjectID;

    @Column()
    name:string;

    @Column()
    email:string;
}