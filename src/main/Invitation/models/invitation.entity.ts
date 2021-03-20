
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Unique, OneToMany, ManyToOne } from 'typeorm';
import { Expertise } from '../../Expertise/models/expertise.entity';
import { User } from '../../User/models/user.entity';
 

@Entity()

export class Invitation extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;


    @Column('int')
    userId: number;
 
    @Column()
    to?: string;
 
    @Column({ length: 5})
    code?: string; 

    @Column('int')
    isExpired: number;
  
    @Column({ nullable: true})  
    expDate: Date;

    @Column()
    isDeleted : boolean ; 
 
    @Column({ nullable: true, default: () => 'CURRENT_TIMESTAMP' })  
    createdAt: Date;

    @Column({ nullable: true})  
    updatedAt: Date;


    @ManyToOne(() => User , user => user.invitations)
    user: User ;




}