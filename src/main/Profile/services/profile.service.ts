import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
 
import { Connection } from 'typeorm';
import { ProfileFilterDto } from '../models/profile.dto';
import { Profile } from '../models/profile.entity';
import { ProfileRepository } from '../repository/profile.repository';

@Injectable()
export class ProfileService {

    constructor(
        @InjectRepository(ProfileRepository)
        private unitRepository: ProfileRepository,
        private connection: Connection,
    ) {
    }

    async getProfiles(filterDTO?: ProfileFilterDto): Promise<Profile[]> {
        return this.unitRepository.getProfiles(filterDTO);
    }

    async getProfileById(id: number): Promise<Profile> {
        return this.unitRepository.getOne({ id });

    }


    async createProfile(unit: Profile): Promise<Profile> {
        return await this.unitRepository.createProfile(unit) ; 
    }

    async createProfiles(unit: Profile[]): Promise<Profile[]> { 
        return await this.unitRepository.createProfile(unit) ; 
    }

   async updateProfile(unit: Profile): Promise<Profile> {
        return  await this.unitRepository.updateProfile(unit) ;  
    }


    async updateProfiles(unit: Profile[]): Promise<Profile[]> {
        return await this.unitRepository.updateProfile(unit) 
    }


    

  async   deleteProfile(id: number): Promise<void> {
        return await this.unitRepository.deleteProfile([id]) ;

    } 

    async  deleteProfiles(id: number[]): Promise<void> {
        return await  this.unitRepository.deleteProfile(id) ;
    }


}
