
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Unique, OneToMany, ManyToOne } from 'typeorm';
import { User } from '../../User/models/user.entity';
 

@Entity()
@Unique(["userId" , "parentId", "isDeleted"])
export class Link extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    userId: number;

    @Column('int')
    parentId: number;
  
    @Column()
    isDeleted : boolean ; 
 
    @Column({ nullable: true, default: () => 'CURRENT_TIMESTAMP' })  
    createdAt: Date;

    @Column({ nullable: true})  
    updatedAt: Date;

    @ManyToOne(() => User, user => user.links)
    user:User;

    @ManyToOne(() => User, parent => parent.links)
    parent:User;


}