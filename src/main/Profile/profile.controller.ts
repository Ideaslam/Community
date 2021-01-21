import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common'; 
 
import { ProfileService } from './services/profile.service';
import { ProfileCreateDto, ProfileFilterDto, ProfileUpdateDto } from './models/profile.dto';
import { Profile } from './models/profile.entity';

@Controller('profile')
export class ProfileController {

    constructor(private profileService: ProfileService) {
    }

    @Get()
    GetProfile(@Query(ValidationPipe) filterDTO: ProfileFilterDto): Promise<Profile[]> {
        return this.profileService.getProfiles(filterDTO);
    }

    @Get('/:id')
    GetProfileById(@Param('id', ParseIntPipe) id: number): Promise<Profile> {
        return this.profileService.getProfileById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    CreateProfile(@Body() profile : Profile): Promise<Profile> {
        return this.profileService.createProfile(profile);
    }

    @Put('/:id')
    UpdateProfile(
        @Param('id', ParseIntPipe) id: number,
        @Body() profile : Profile  ): Promise<Profile> {
        return this.profileService.updateProfile(profile);
    }

    @Delete('/:id')
    DeleteProfile(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.profileService.deleteProfile(id);
    }

  
}
