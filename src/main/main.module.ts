import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
 
 
import { SharedModule } from '../shared/shared.module';
import { ExpertiseController } from './Expertise/expertise.controller';
import { ExpertiseRepository } from './Expertise/repository/expertise.repository';
import { ExpertiseService } from './Expertise/services/expertise.service';
import { InvitationController } from './Invitation/invitation.controller';
import { InvitationRepository } from './Invitation/repository/invitation.repository';
import { InvitationService } from './Invitation/services/invitation.service';
import { LinkController } from './Link/link.controller';
import { LinkRepository } from './Link/repository/link.repository';
import { LinkService } from './Link/services/link.service';
import { ProfileController } from './Profile/profile.controller';
import { ProfileRepository } from './Profile/repository/profile.repository';
import { ProfileService } from './Profile/services/profile.service';
import { SpecialityRepository } from './Speciality/repository/speciality.repository';
import { SpecialityService } from './Speciality/services/speciality.service';
import { SpecialityController } from './Speciality/speciality.controller';
import { UserRepository } from './User/repository/user.repository';
import { UserService } from './User/services/user.service';
import { UserController } from './User/user.controller';
 
 
 

@Module({
    imports:[SharedModule ,
        TypeOrmModule.forFeature([UserRepository ,ProfileRepository,LinkRepository, SpecialityRepository , ExpertiseRepository ,InvitationRepository])   

    ],
    providers:[  UserService ,ProfileService,LinkService, SpecialityService , ExpertiseService ,InvitationService],
      exports:[ UserService ,ProfileService,LinkService, SpecialityService , ExpertiseService ,InvitationService] ,
      controllers: [ UserController ,ProfileController,LinkController, SpecialityController , ExpertiseController ,InvitationController],
})
export class MainModule {}
 