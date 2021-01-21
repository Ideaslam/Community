
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Unique } from 'typeorm';
 

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


}