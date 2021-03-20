import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Exclude } from 'class-transformer';
import { exception } from 'console';
import { userInfo } from 'os';
 
import { Connection } from 'typeorm';
import { UserFilterDto } from '../models/user.dto';
import { User } from '../models/user.entity';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserRepository)
        private userRepository: UserRepository,
        private connection: Connection,
    ) {
    }

    async getUsers(filterDTO?: UserFilterDto): Promise<User[]> {
        return this.userRepository.getUsers(filterDTO);
    }

    async getUserById(id: number): Promise<User> {
        return this.userRepository.getOne({ id });

    }


    async createUser(user: User): Promise<User> {
        try{
            user.isActive= 'Active'; 
            user.isDeleted= false; 
             
            return await this.userRepository.createUser(user) ; 

        }catch(ex){
           throw new  BadRequestException(ex.message) ;
           
        }
     
    }

    async createUsers(user: User[]): Promise<User[]> { 
        return await this.userRepository.createUser(user) ; 
    }

   async updateUser(user: User): Promise<User> {
       user.updatedAt =new Date() ;
        return  await this.userRepository.updateUser(user) ;  
    }


    async updateUsers(user: User[]): Promise<User[]> {
        return await this.userRepository.updateUser(user) 
    }


    

  async   deleteUser(id: number): Promise<void> {
        return await this.userRepository.deleteUser([id]) ;

    } 

    async  deleteUsers(id: number[]): Promise<void> {
        return await  this.userRepository.deleteUser(id) ;
    }


}
