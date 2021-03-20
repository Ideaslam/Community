import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common'; 
 
import { UserService } from './services/user.service';
import { UserCreateDto, UserFilterDto, UserUpdateDto } from './models/user.dto';
import { User } from './models/user.entity';
import { STATUS_CODES } from 'http';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {
    }

    @Get()
    GetUser(@Query(ValidationPipe) filterDTO: UserFilterDto): Promise<User[]> {
        return this.userService.getUsers(filterDTO);
    }

    @Get('/:id')
    GetUserById(@Param('id', ParseIntPipe) id: number): Promise<User> {
        return this.userService.getUserById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    async CreateUser(@Body() user : User): Promise<User> {
        try{
            return await this.userService.createUser(user);
        }catch(ex){
           
            return ex ;
        }
        
    }

    @Put('/:id')
    UpdateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() user : User  ): Promise<User> {
            user.id= id; 
        return this.userService.updateUser(user);
    }

    @Delete('/:id')
    DeleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.userService.deleteUser(id);
    }

  
}
