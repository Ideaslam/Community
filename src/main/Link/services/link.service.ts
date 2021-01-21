import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
 
import { Connection } from 'typeorm';
import { LinkFilterDto } from '../models/link.dto';
import { Link } from '../models/link.entity';
import { LinkRepository } from '../repository/link.repository';

@Injectable()
export class LinkService {

    constructor(
        @InjectRepository(LinkRepository)
        private unitRepository: LinkRepository,
        private connection: Connection,
    ) {
    }

    async getLinks(filterDTO?: LinkFilterDto): Promise<Link[]> {
        return this.unitRepository.getLinks(filterDTO);
    }

    async getLinkById(id: number): Promise<Link> {
        return this.unitRepository.getOne({ id });

    }


    async createLink(unit: Link): Promise<Link> {
        return await this.unitRepository.createLink(unit) ; 
    }

    async createLinks(unit: Link[]): Promise<Link[]> { 
        return await this.unitRepository.createLink(unit) ; 
    }

   async updateLink(unit: Link): Promise<Link> {
        return  await this.unitRepository.updateLink(unit) ;  
    }


    async updateLinks(unit: Link[]): Promise<Link[]> {
        return await this.unitRepository.updateLink(unit) 
    }


    

  async   deleteLink(id: number): Promise<void> {
        return await this.unitRepository.deleteLink([id]) ;

    } 

    async  deleteLinks(id: number[]): Promise<void> {
        return await  this.unitRepository.deleteLink(id) ;
    }


}
