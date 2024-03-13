import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchoolsModule } from './schools/schools.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      port: 3306,
      database: 'gulaUsers',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    })
    , UsersModule, SchoolsModule]  
})

export class AppModule {}
