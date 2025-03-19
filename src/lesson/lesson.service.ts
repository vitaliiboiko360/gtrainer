import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
// import { CreateLessonDto } from './dto/create-lesson.dto';
// import { UpdateLessonDto } from './dto/update-lesson.dto';
import { Lesson } from './lesson.interface';
import { LESSON_MODEL } from './constants';

@Injectable()
export class LessonService {
  constructor(
    @Inject(LESSON_MODEL)
    private lessonModel: Model<Lesson>,
  ) {}

  // create(createLessonDto: CreateLessonDto) {
  //   return 'This action adds a new lesson';
  // }

  findAll(): Promise<Lesson[]> {
    return this.lessonModel.find().exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} lesson`;
  // }

  // update(id: number, updateLessonDto: UpdateLessonDto) {
  //   return `This action updates a #${id} lesson`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} lesson`;
  // }
}
