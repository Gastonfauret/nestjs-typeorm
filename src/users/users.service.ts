import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import User from './user.entity';
import { Repository } from 'typeorm';
import CreateUserDto from './dto/create-user-dto';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private UserRepository: Repository<User>) {}

    async createUSer(user: CreateUserDto) {
        const userFound = await this.UserRepository.findOne({where: {username: user.username}});
        if (userFound){
            return new HttpException('Username already exists', HttpStatus.CONFLICT);
        }
        const newUser = this.UserRepository.create(user);
        return this.UserRepository.save(newUser);
    }

    getUsers(){
        return this.UserRepository.find();
    }
}
