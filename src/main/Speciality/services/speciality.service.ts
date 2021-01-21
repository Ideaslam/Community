import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
 
import { Connection } from 'typeorm';
import { SpecialityFilterDto } from '../models/speciality.dto';
import { Speciality } from '../models/speciality.entity';
import { SpecialityRepository } from '../repository/speciality.repository';

@Injectable()
export class SpecialityService {

    constructor(
        @InjectRepository(SpecialityRepository)
        private unitRepository: SpecialityRepository,
        private connection: Connection,
    ) {
    }

    async getSpecialitys(filterDTO?: SpecialityFilterDto): Promise<Speciality[]> {
        return this.unitRepository.getSpecialitys(filterDTO);
    }

    async getSpecialityById(id: number): Promise<Speciality> {
        return this.unitRepository.getOne({ id });

    }


    async createSpeciality(unit: Speciality): Promise<Speciality> {
        return await this.unitRepository.createSpeciality(unit) ; 
    }

    async createSpecialitys(unit: Speciality[]): Promise<Speciality[]> { 
        return await this.unitRepository.createSpeciality(unit) ; 
    }

   async updateSpeciality(unit: Speciality): Promise<Speciality> {
        return  await this.unitRepository.updateSpeciality(unit) ;  
    }


    async updateSpecialitys(unit: Speciality[]): Promise<Speciality[]> {
        return await this.unitRepository.updateSpeciality(unit) 
    }


    

  async   deleteSpeciality(id: number): Promise<void> {
        return await this.unitRepository.deleteSpeciality([id]) ;

    } 

    async  deleteSpecialitys(id: number[]): Promise<void> {
        return await  this.unitRepository.deleteSpeciality(id) ;
    }


}
