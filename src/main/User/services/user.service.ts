import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
 
import { Connection } from 'typeorm';
import { UserFilterDto } from '../models/user.dto';
import { User } from '../models/user.entity';
import { UserRepository } from '../repository/user.repository';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserRepository)
        private unitRepository: UserRepository,
        private connection: Connection,
    ) {
    }

    async getUsers(filterDTO?: UserFilterDto): Promise<User[]> {
        return this.unitRepository.getUsers(filterDTO);
    }

    async getUserById(id: number): Promise<User> {
        return this.unitRepository.getOne({ id });

    }


    async createUser(unit: User): Promise<User> {
        return await this.unitRepository.createUser(unit) ; 
    }

    async createUsers(unit: User[]): Promise<User[]> { 
        return await this.unitRepository.createUser(unit) ; 
    }

   async updateUser(unit: User): Promise<User> {
        return  await this.unitRepository.updateUser(unit) ;  
    }


    async updateUsers(unit: User[]): Promise<User[]> {
        return await this.unitRepository.updateUser(unit) 
    }


    

  async   deleteUser(id: number): Promise<void> {
        return await this.unitRepository.deleteUser([id]) ;

    } 

    async  deleteUsers(id: number[]): Promise<void> {
        return await  this.unitRepository.deleteUser(id) ;
    }


}
