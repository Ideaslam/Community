
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Unique, OneToMany, ManyToOne } from 'typeorm';
import { Speciality } from '../../Speciality/models/speciality.entity';
import { User } from '../../User/models/user.entity';
 

@Entity()
@Unique(["userId" ,"specialityId", "isDeleted"])
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

    
    @ManyToOne(() => User , user => user.expertises)
    user: User  ;

    
    @OneToMany(() => Speciality , speciality => speciality.expertise)
    specialities: Speciality[]  ;

}