import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common'; 
 
import { InvitationService } from './services/invitation.service';
import { InvitationCreateDto, InvitationFilterDto, InvitationUpdateDto } from './models/invitation.dto';
import { Invitation } from './models/invitation.entity';

@Controller('invitation')
export class InvitationController {

    constructor(private invitationService: InvitationService) {
    }

    @Get()
    GetInvitation(@Query(ValidationPipe) filterDTO: InvitationFilterDto): Promise<Invitation[]> {
        return this.invitationService.getInvitations(filterDTO);
    }

    @Get('/:id')
    GetInvitationById(@Param('id', ParseIntPipe) id: number): Promise<Invitation> {
        return this.invitationService.getInvitationById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    CreateInvitation(@Body() invitation : Invitation): Promise<Invitation> {
        return this.invitationService.createInvitation(invitation);
    }

    @Put('/:id')
    UpdateInvitation(
        @Param('id', ParseIntPipe) id: number,
        @Body() invitation : Invitation  ): Promise<Invitation> {
        return this.invitationService.updateInvitation(invitation);
    }

    @Delete('/:id')
    DeleteInvitation(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.invitationService.deleteInvitation(id);
    }

  
}
