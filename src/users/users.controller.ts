import { Controller, Body, Post, Get } from '@nestjs/common';
import  UsersService from './users.service';
import CreateUserDto from './dto/create-user-dto';
import User from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private UserService: UsersService) { }

    @Post()
    createUser(@Body() newUser: CreateUserDto) {
        return this.UserService.createUSer(newUser);
    }

    @Get()
    getUsers(): Promise<User[]>{
        return this.UserService.getUsers();
    }
}
