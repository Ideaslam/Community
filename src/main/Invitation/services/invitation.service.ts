import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
 
import { Connection } from 'typeorm';
import { InvitationFilterDto } from '../models/invitation.dto';
import { Invitation } from '../models/invitation.entity';
import { InvitationRepository } from '../repository/invitation.repository';

@Injectable()
export class InvitationService {

    constructor(
        @InjectRepository(InvitationRepository)
        private unitRepository: InvitationRepository,
        private connection: Connection,
    ) {
    }

    async getInvitations(filterDTO?: InvitationFilterDto): Promise<Invitation[]> {
        return this.unitRepository.getInvitations(filterDTO);
    }

    async getInvitationById(id: number): Promise<Invitation> {
        return this.unitRepository.getOne({ id });

    }


    async createInvitation(unit: Invitation): Promise<Invitation> {
        return await this.unitRepository.createInvitation(unit) ; 
    }

    async createInvitations(unit: Invitation[]): Promise<Invitation[]> { 
        return await this.unitRepository.createInvitation(unit) ; 
    }

   async updateInvitation(unit: Invitation): Promise<Invitation> {
        return  await this.unitRepository.updateInvitation(unit) ;  
    }


    async updateInvitations(unit: Invitation[]): Promise<Invitation[]> {
        return await this.unitRepository.updateInvitation(unit) 
    }


    

  async   deleteInvitation(id: number): Promise<void> {
        return await this.unitRepository.deleteInvitation([id]) ;

    } 

    async  deleteInvitations(id: number[]): Promise<void> {
        return await  this.unitRepository.deleteInvitation(id) ;
    }


}
