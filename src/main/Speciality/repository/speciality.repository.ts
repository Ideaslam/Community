 
import { EntityRepository, In, Repository } from 'typeorm';
import { SpecialityFilterDto } from '../models/speciality.dto';
import { Speciality } from '../models/speciality.entity';


@EntityRepository(Speciality)
export class SpecialityRepository extends Repository<Speciality> {


    async getSpecialitys(filterDTO: SpecialityFilterDto = {}): Promise<Speciality[]> { 
        return await this.find({ where: filterDTO }) ;
    }

    async getOne(filterDTO: SpecialityFilterDto = {}): Promise<Speciality> {
        return await this.findOne({ where: filterDTO }) ;
    }

    async getSpecialityByIds(ids: number[]): Promise<Speciality[]> {
        return  this.find({ where: { id: In(ids) } }) ;
    }

    async createSpeciality(speciality: Speciality): Promise<Speciality>;
    async  createSpeciality(specialitys: Speciality[]): Promise<Speciality[]>;
    async createSpeciality(speciality: Speciality | Speciality[]): Promise<Speciality | Speciality[]> {
        console.log('Create Speciality')
        if (Array.isArray(speciality)) {
            return  await this.save(speciality) ;
        }
        return await this.save(speciality) ;
    }

    async  updateSpeciality(speciality: Speciality): Promise<Speciality>;
    async  updateSpeciality(specialitys: Speciality[]): Promise<Speciality[]>;
    async updateSpeciality(speciality: Speciality | Speciality[]): Promise<Speciality | Speciality[]> {
        console.log('Update  Speciality')
        if (Array.isArray(speciality)) {
            return  this.save(speciality) ; 
        }
        return  this.save(speciality);
    }

    async deleteSpeciality(ids: number[]): Promise<void> {

         var specialitys = await this.getSpecialityByIds(ids) ;
         
            specialitys.forEach(speciality => {
                    speciality.isDeleted = true;
                })
                console.log('Delete Speciality') ;
                this.save(specialitys) ;
        

    }


}
