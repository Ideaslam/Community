 
import { EntityRepository, In, Repository } from 'typeorm';
import { LinkFilterDto } from '../models/link.dto';
import { Link } from '../models/link.entity';


@EntityRepository(Link)
export class LinkRepository extends Repository<Link> {


    async getLinks(filterDTO: LinkFilterDto = {}): Promise<Link[]> { 
        return await this.find({ where: filterDTO }) ;
    }

    async getOne(filterDTO: LinkFilterDto = {}): Promise<Link> {
        return await this.findOne({ where: filterDTO }) ;
    }

    async getLinkByIds(ids: number[]): Promise<Link[]> {
        return  this.find({ where: { id: In(ids) } }) ;
    }

    async createLink(link: Link): Promise<Link>;
    async  createLink(links: Link[]): Promise<Link[]>;
    async createLink(link: Link | Link[]): Promise<Link | Link[]> {
        console.log('Create Link')
        if (Array.isArray(link)) {
            return  await this.save(link) ;
        }
        return await this.save(link) ;
    }

    async  updateLink(link: Link): Promise<Link>;
    async  updateLink(links: Link[]): Promise<Link[]>;
    async updateLink(link: Link | Link[]): Promise<Link | Link[]> {
        console.log('Update  Link')
        if (Array.isArray(link)) {
            return  this.save(link) ; 
        }
        return  this.save(link);
    }

    async deleteLink(ids: number[]): Promise<void> {

         var links = await this.getLinkByIds(ids) ;
         
            links.forEach(link => {
                    link.isDeleted = true;
                })
                console.log('Delete Link') ;
                this.save(links) ;
        

    }


}
