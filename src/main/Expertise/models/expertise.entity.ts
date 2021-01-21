
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Unique } from 'typeorm';
 

@Entity()
@Unique(["email", "isDeleted"])
export class Expertise extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('int')
    userId: number;
 
    @Column('int')
    specialityId: number;
 
    @Column()
    isDeleted : boolean ; 
 
    @Column({ nullable: true, default: () => 'CURRENT_TIMESTAMP' })  
    createdAt: Date;

    @Column({ nullable: true})  
    updatedAt: Date;


}