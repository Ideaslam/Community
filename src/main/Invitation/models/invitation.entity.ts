
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Unique } from 'typeorm';
 

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


}