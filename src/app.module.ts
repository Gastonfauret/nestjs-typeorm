import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import UsersService from './users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      port: 3300,
      database: 'gulaUsers',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })
    , UsersModule]  
})

export class AppModule {}
