import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonController } from './lesson.controller';
import { lessonsProviders } from './lesson.provider';
import { DatabaseModule } from 'src/db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [LessonController],
  providers: [LessonService, ...lessonsProviders],
})
export class LessonModule {
  constructor(private lessonsService: LessonService) {}
}
