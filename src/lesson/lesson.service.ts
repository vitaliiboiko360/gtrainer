import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
// import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';
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

  findOne(name: string) {
    return this.lessonModel.findOne({ name: name }).exec();
  }

  update(name: string, updateLessonDto: UpdateLessonDto) {
    return this.lessonModel.updateOne({ name: name }, updateLessonDto);
  }

  // remove(id: number) {
  //   return `This action removes a #${id} lesson`;
  // }
}
