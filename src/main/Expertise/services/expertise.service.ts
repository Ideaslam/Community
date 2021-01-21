import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
 
import { Connection } from 'typeorm';
import { ExpertiseFilterDto } from '../models/expertise.dto';
import { Expertise } from '../models/expertise.entity';
import { ExpertiseRepository } from '../repository/expertise.repository';

@Injectable()
export class ExpertiseService {

    constructor(
        @InjectRepository(ExpertiseRepository)
        private unitRepository: ExpertiseRepository,
        private connection: Connection,
    ) {
    }

    async getExpertises(filterDTO?: ExpertiseFilterDto): Promise<Expertise[]> {
        return this.unitRepository.getExpertises(filterDTO);
    }

    async getExpertiseById(id: number): Promise<Expertise> {
        return this.unitRepository.getOne({ id });

    }


    async createExpertise(unit: Expertise): Promise<Expertise> {
        return await this.unitRepository.createExpertise(unit) ; 
    }

    async createExpertises(unit: Expertise[]): Promise<Expertise[]> { 
        return await this.unitRepository.createExpertise(unit) ; 
    }

   async updateExpertise(unit: Expertise): Promise<Expertise> {
        return  await this.unitRepository.updateExpertise(unit) ;  
    }


    async updateExpertises(unit: Expertise[]): Promise<Expertise[]> {
        return await this.unitRepository.updateExpertise(unit) 
    }


    

  async   deleteExpertise(id: number): Promise<void> {
        return await this.unitRepository.deleteExpertise([id]) ;

    } 

    async  deleteExpertises(id: number[]): Promise<void> {
        return await  this.unitRepository.deleteExpertise(id) ;
    }


}
