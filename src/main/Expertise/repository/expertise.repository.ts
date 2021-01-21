 
import { EntityRepository, In, Repository } from 'typeorm';
import { ExpertiseFilterDto } from '../models/expertise.dto';
import { Expertise } from '../models/expertise.entity';


@EntityRepository(Expertise)
export class ExpertiseRepository extends Repository<Expertise> {


    async getExpertises(filterDTO: ExpertiseFilterDto = {}): Promise<Expertise[]> { 
        return await this.find({ where: filterDTO }) ;
    }

    async getOne(filterDTO: ExpertiseFilterDto = {}): Promise<Expertise> {
        return await this.findOne({ where: filterDTO }) ;
    }

    async getExpertiseByIds(ids: number[]): Promise<Expertise[]> {
        return  this.find({ where: { id: In(ids) } }) ;
    }

    async createExpertise(expertise: Expertise): Promise<Expertise>;
    async  createExpertise(expertises: Expertise[]): Promise<Expertise[]>;
    async createExpertise(expertise: Expertise | Expertise[]): Promise<Expertise | Expertise[]> {
        console.log('Create Expertise')
        if (Array.isArray(expertise)) {
            return  await this.save(expertise) ;
        }
        return await this.save(expertise) ;
    }

    async  updateExpertise(expertise: Expertise): Promise<Expertise>;
    async  updateExpertise(expertises: Expertise[]): Promise<Expertise[]>;
    async updateExpertise(expertise: Expertise | Expertise[]): Promise<Expertise | Expertise[]> {
        console.log('Update  Expertise')
        if (Array.isArray(expertise)) {
            return  this.save(expertise) ; 
        }
        return  this.save(expertise);
    }

    async deleteExpertise(ids: number[]): Promise<void> {

         var expertises = await this.getExpertiseByIds(ids) ;
         
            expertises.forEach(expertise => {
                    expertise.isDeleted = true;
                })
                console.log('Delete Expertise') ;
                this.save(expertises) ;
        

    }


}
