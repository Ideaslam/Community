
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Unique, OneToMany, ManyToMany, ManyToOne } from 'typeorm';
import { Expertise } from '../../Expertise/models/expertise.entity';
 

@Entity()
@Unique(["handle", "isDeleted"])
export class Speciality extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nameAr?: string;
 
    @Column()
    nameEn?: string;

    @Column()
    handle?: string;

    @Column({nullable : true})
    logo?: string;
  
    @Column()
    isDeleted : boolean ; 
 
    @Column({ nullable: true, default: () => 'CURRENT_TIMESTAMP' })  
    createdAt: Date;

    @Column({ nullable: true})  
    updatedAt: Date;

    @ManyToOne(() => Expertise , expertise => expertise.specialities)
    expertise: Expertise  ;


}