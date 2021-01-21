 
import { EntityRepository, In, Repository } from 'typeorm';
import { ProfileFilterDto } from '../models/profile.dto';
import { Profile } from '../models/profile.entity';


@EntityRepository(Profile)
export class ProfileRepository extends Repository<Profile> {


    async getProfiles(filterDTO: ProfileFilterDto = {}): Promise<Profile[]> { 
        return await this.find({ where: filterDTO }) ;
    }

    async getOne(filterDTO: ProfileFilterDto = {}): Promise<Profile> {
        return await this.findOne({ where: filterDTO }) ;
    }

    async getProfileByIds(ids: number[]): Promise<Profile[]> {
        return  this.find({ where: { id: In(ids) } }) ;
    }

    async createProfile(profile: Profile): Promise<Profile>;
    async  createProfile(profiles: Profile[]): Promise<Profile[]>;
    async createProfile(profile: Profile | Profile[]): Promise<Profile | Profile[]> {
        console.log('Create Profile')
        if (Array.isArray(profile)) {
            return  await this.save(profile) ;
        }
        return await this.save(profile) ;
    }

    async  updateProfile(profile: Profile): Promise<Profile>;
    async  updateProfile(profiles: Profile[]): Promise<Profile[]>;
    async updateProfile(profile: Profile | Profile[]): Promise<Profile | Profile[]> {
        console.log('Update  Profile')
        if (Array.isArray(profile)) {
            return  this.save(profile) ; 
        }
        return  this.save(profile);
    }

    async deleteProfile(ids: number[]): Promise<void> {

         var profiles = await this.getProfileByIds(ids) ;
         
            profiles.forEach(profile => {
                    profile.isDeleted = true;
                })
                console.log('Delete Profile') ;
                this.save(profiles) ;
        

    }


}
