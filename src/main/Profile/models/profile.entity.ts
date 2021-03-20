

import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Unique, OneToOne, JoinColumn } from 'typeorm';
import { User } from '../../User/models/user.entity';
 

@Entity()
@Unique(["userId", "isDeleted"])
export class Profile extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    userId: number;
 
    @Column({nullable : true})
    firstName?: string;

    @Column({nullable : true})
    lastName?: string; 

    @Column( {nullable : true})
    image?: string;
   
    @Column()
    isDeleted : boolean ; 
 
    @Column({ nullable: true, default: () => 'CURRENT_TIMESTAMP' })  
    createdAt: Date;

    @Column({ nullable: true})  
    updatedAt: Date;



    @OneToOne(() => User, user => user.profile) // specify inverse side as a second parameter
    user: User;
    


}