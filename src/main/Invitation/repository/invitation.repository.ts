 
import { EntityRepository, In, Repository } from 'typeorm';
import { InvitationFilterDto } from '../models/invitation.dto';
import { Invitation } from '../models/invitation.entity';


@EntityRepository(Invitation)
export class InvitationRepository extends Repository<Invitation> {


    async getInvitations(filterDTO: InvitationFilterDto = {}): Promise<Invitation[]> { 
        return await this.find({ where: filterDTO }) ;
    }

    async getOne(filterDTO: InvitationFilterDto = {}): Promise<Invitation> {
        return await this.findOne({ where: filterDTO }) ;
    }

    async getInvitationByIds(ids: number[]): Promise<Invitation[]> {
        return  this.find({ where: { id: In(ids) } }) ;
    }

    async createInvitation(invitation: Invitation): Promise<Invitation>;
    async  createInvitation(invitations: Invitation[]): Promise<Invitation[]>;
    async createInvitation(invitation: Invitation | Invitation[]): Promise<Invitation | Invitation[]> {
        console.log('Create Invitation')
        if (Array.isArray(invitation)) {
            return  await this.save(invitation) ;
        }
        return await this.save(invitation) ;
    }

    async  updateInvitation(invitation: Invitation): Promise<Invitation>;
    async  updateInvitation(invitations: Invitation[]): Promise<Invitation[]>;
    async updateInvitation(invitation: Invitation | Invitation[]): Promise<Invitation | Invitation[]> {
        console.log('Update  Invitation')
        if (Array.isArray(invitation)) {
            return  this.save(invitation) ; 
        }
        return  this.save(invitation);
    }

    async deleteInvitation(ids: number[]): Promise<void> {

         var invitations = await this.getInvitationByIds(ids) ;
         
            invitations.forEach(invitation => {
                    invitation.isDeleted = true;
                })
                console.log('Delete Invitation') ;
                this.save(invitations) ;
        

    }


}
