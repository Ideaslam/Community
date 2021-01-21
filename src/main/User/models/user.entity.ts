
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Unique } from 'typeorm';
 

@Entity()
@Unique(["email", "isDeleted"])
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable : true})
    countryCode?: number;
 
    @Column({nullable : true})
    phoneNumber?: string;

    @Column({ length: 25})
    email?: string; 

    @Column('int' ,{nullable : true})
    level?: number;
  
    @Column()
    isActive : string  = 'Active' || 'InActive'; 

    @Column()
    isDeleted : boolean ; 
 
    @Column({ nullable: true, default: () => 'CURRENT_TIMESTAMP' })  
    createdAt: Date;

    @Column({ nullable: true})  
    updatedAt: Date;


}