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
        private invitationRepository: InvitationRepository,
        private connection: Connection,
    ) {
    }

    async getInvitations(filterDTO?: InvitationFilterDto): Promise<Invitation[]> {
        return this.invitationRepository.getInvitations(filterDTO);
    }

    async getInvitationById(id: number): Promise<Invitation> {
        return this.invitationRepository.getOne({ id });

    }


    async createInvitation(invitation: Invitation): Promise<Invitation> {
        try {
            invitation.isDeleted = false;
            invitation.createdAt = new Date();
            invitation.code = this.generateRandomLetter() + this.generateRandomLetter() + this.generateRandomLetter() + this.generateRandomLetter() + this.generateRandomLetter();

            return await this.invitationRepository.createInvitation(invitation);
        } catch (ex) {
            throw new BadRequestException(ex.message);

        }
    }

    async createInvitations(invitation: Invitation[]): Promise<Invitation[]> {


        return await this.invitationRepository.createInvitation(invitation);
    }

    async updateInvitation(invitation: Invitation): Promise<Invitation> {
        return await this.invitationRepository.updateInvitation(invitation);
    }


    async updateInvitations(invitation: Invitation[]): Promise<Invitation[]> {
        return await this.invitationRepository.updateInvitation(invitation)
    }




    async deleteInvitation(id: number): Promise<void> {
        return await this.invitationRepository.deleteInvitation([id]);

    }

    async deleteInvitations(id: number[]): Promise<void> {
        return await this.invitationRepository.deleteInvitation(id);
    }


    generateRandomLetter() {
        const alphabet = "abcdefghijklmnopqrstuvwxyz"

        return alphabet[Math.floor(Math.random() * alphabet.length)]
    }

}
