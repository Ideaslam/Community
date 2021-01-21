import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common'; 
 
import { ExpertiseService } from './services/expertise.service';
import { ExpertiseCreateDto, ExpertiseFilterDto, ExpertiseUpdateDto } from './models/expertise.dto';
import { Expertise } from './models/expertise.entity';

@Controller('expertise')
export class ExpertiseController {

    constructor(private expertiseService: ExpertiseService) {
    }

    @Get()
    GetExpertise(@Query(ValidationPipe) filterDTO: ExpertiseFilterDto): Promise<Expertise[]> {
        return this.expertiseService.getExpertises(filterDTO);
    }

    @Get('/:id')
    GetExpertiseById(@Param('id', ParseIntPipe) id: number): Promise<Expertise> {
        return this.expertiseService.getExpertiseById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    CreateExpertise(@Body() expertise : Expertise): Promise<Expertise> {
        return this.expertiseService.createExpertise(expertise);
    }

    @Put('/:id')
    UpdateExpertise(
        @Param('id', ParseIntPipe) id: number,
        @Body() expertise : Expertise  ): Promise<Expertise> {
        return this.expertiseService.updateExpertise(expertise);
    }

    @Delete('/:id')
    DeleteExpertise(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.expertiseService.deleteExpertise(id);
    }

  
}
