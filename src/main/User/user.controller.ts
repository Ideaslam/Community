import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put, Query, UsePipes, ValidationPipe } from '@nestjs/common'; 
 
import { UserService } from './services/user.service';
import { UserCreateDto, UserFilterDto, UserUpdateDto } from './models/user.dto';
import { User } from './models/user.entity';

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
    CreateUser(@Body() user : User): Promise<User> {
        return this.userService.createUser(user);
    }

    @Put('/:id')
    UpdateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() user : User  ): Promise<User> {
        return this.userService.updateUser(user);
    }

    @Delete('/:id')
    DeleteUser(@Param('id', ParseIntPipe) id: number): Promise<void> {
        return this.userService.deleteUser(id);
    }

  
}
