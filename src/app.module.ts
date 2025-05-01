import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LessonModule } from './lesson/lesson.module';
import { TranslationModule } from './translation/translation.module';

@Module({
  imports: [LessonModule, TranslationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
