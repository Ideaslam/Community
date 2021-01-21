import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common'; 
 
import { LinkService } from './services/link.service';
import { LinkCreateDto, LinkFilterDto, LinkUpdateDto } from './models/link.dto';
import { Link } from './models/link.entity';

@Controller('link')
export class LinkController {

    constructor(private linkService: LinkService) {
    }

    @Get()
    GetLink(@Query(ValidationPipe) filterDTO: LinkFilterDto): Promise<Link[]> {
        return this.linkService.getLinks(filterDTO);
    }

    @Get('/:id')
    GetLinkById(@Param('id', ParseIntPipe) id: number): Promise<Link> {
        return this.linkService.getLinkById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    CreateLink(@Body() link : Link): Promise<Link> {
        return this.linkService.createLink(link);
    }

    @Put('/:id')
    UpdateLink(
        @Param('id', ParseIntPipe) id: number,
        @Body() link : Link  ): Promise<Link> {
        return this.linkService.updateLink(link);
    }

    @Delete('/:id')
    DeleteLink(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.linkService.deleteLink(id);
    }

  
}
