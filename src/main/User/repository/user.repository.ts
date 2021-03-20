 
import { EntityRepository, In, Repository } from 'typeorm';
import { UserFilterDto } from '../models/user.dto';
import { User } from '../models/user.entity';


@EntityRepository(User)
export class UserRepository extends Repository<User> {


    async getUsers(filterDTO: UserFilterDto = {}): Promise<User[]> { 
        return await this.find({ where: filterDTO }) ;
    }

    async getOne(filterDTO: UserFilterDto = {}): Promise<User> {
        return await this.findOne({ where: filterDTO }) ;
    }

    async getUserByIds(ids: number[]): Promise<User[]> {
        return  this.find({ where: { id: In(ids) } }) ;
    }

    async createUser(user: User): Promise<User>;
    async createUser(users: User[]): Promise<User[]>;
    async createUser(user: User | User[]): Promise<User | User[]> {
        console.log('Create User')
        
        if (Array.isArray(user)) {
            return  await this.save(user) ;
        }
        return await this.save(user) ;
    }

    async  updateUser(user: User): Promise<User>;
    async  updateUser(users: User[]): Promise<User[]>;
    async  updateUser(user: User | User[]): Promise<User | User[]> {
        console.log('Update  User')
        if (Array.isArray(user)) {
            return  this.save(user) ; 
        }
        return  this.save(user);
    }

    async deleteUser(ids: number[]): Promise<void> {

         var users = await this.getUserByIds(ids) ;
         
            users.forEach(user => {
                    user.isDeleted = true;
                })
                console.log('Delete User') ;
                this.save(users) ;
        

    }


}
