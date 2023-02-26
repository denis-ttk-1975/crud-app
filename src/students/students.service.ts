import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}
  async findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async create(student: Student): Promise<Student> {
    return this.studentRepository.save(student);
  }
}
