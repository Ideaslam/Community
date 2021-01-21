import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common'; 
 
import { SpecialityService } from './services/speciality.service';
import { SpecialityCreateDto, SpecialityFilterDto, SpecialityUpdateDto } from './models/speciality.dto';
import { Speciality } from './models/speciality.entity';

@Controller('speciality')
export class SpecialityController {

    constructor(private specialityService: SpecialityService) {
    }

    @Get()
    GetSpeciality(@Query(ValidationPipe) filterDTO: SpecialityFilterDto): Promise<Speciality[]> {
        return this.specialityService.getSpecialitys(filterDTO);
    }

    @Get('/:id')
    GetSpecialityById(@Param('id', ParseIntPipe) id: number): Promise<Speciality> {
        return this.specialityService.getSpecialityById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    CreateSpeciality(@Body() speciality : Speciality): Promise<Speciality> {
        return this.specialityService.createSpeciality(speciality);
    }

    @Put('/:id')
    UpdateSpeciality(
        @Param('id', ParseIntPipe) id: number,
        @Body() speciality : Speciality  ): Promise<Speciality> {
        return this.specialityService.updateSpeciality(speciality);
    }

    @Delete('/:id')
    DeleteSpeciality(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.specialityService.deleteSpeciality(id);
    }

  
}
