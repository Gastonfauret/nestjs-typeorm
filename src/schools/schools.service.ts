import { Injectable } from '@nestjs/common';
import { CreateSchoolDto } from './dto/create-school.dto';
import { UpdateSchoolDto } from './dto/update-school.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Schools } from './entities/school.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SchoolsService {
  constructor(
    @InjectRepository(Schools) private schoolsRepository: Repository<Schools>,
  ) {}

  create(createSchoolsDto: CreateSchoolDto) {
    const newSchool = this.schoolsRepository.create(createSchoolsDto);
    return this.schoolsRepository.save(newSchool)
  }

  findAll() {
    return `This action returns all schools`;
  }

  findOne(id: number) {
    return `This action returns a #${id} school`;
  }

  update(id: number, updateSchoolsDto: UpdateSchoolDto) {
    return `This action updates a #${id} school`;
  }

  remove(id: number) {
    return `This action removes a #${id} school`;
  }
}

//2:21:49
//https://www.youtube.com/watch?v=bvw4V6HQB9o&list=PLDSINBygqFcj2XnmW5V5hYmmTJnXJdT3x&index=2&t=8508s