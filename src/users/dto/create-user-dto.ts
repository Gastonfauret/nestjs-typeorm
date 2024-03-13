import { MaxLength } from 'class-validator'

export default class CreateUserDto{
    @MaxLength(10)
    username: string;

    @MaxLength(10)
    password: string;
};