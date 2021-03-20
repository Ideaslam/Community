


import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, Unique, OneToOne, JoinColumn, OneToMany } from 'typeorm';
import { Expertise } from '../../Expertise/models/expertise.entity';
import { Invitation } from '../../Invitation/models/invitation.entity';
import { Link } from '../../Link/models/link.entity';
import { Profile } from '../../Profile/models/profile.entity';
 

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
 
    @OneToOne(() => Profile, profile => profile.user) // specify inverse side as a second parameter
    @JoinColumn()
    profile: Profile;


    @OneToMany(() => Invitation, invitation => invitation.user)
    invitations: Invitation[];

    @OneToMany(() => Link, invitation => invitation.user)
    links: Link[];
    
    
    @OneToMany(() => Expertise , expertise => expertise.user)
    expertises: Expertise[] ;

}