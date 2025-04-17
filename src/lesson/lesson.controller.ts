import {
  Controller,
  Get,
  // Post,
  // Body,
  // Patch,
  Put,
  Param,
  Body,
  // Delete,
} from '@nestjs/common';
import { LessonService } from './lesson.service';
// import { CreateLessonDto } from './dto/create-lesson.dto';
import { UpdateLessonDto } from './dto/update-lesson.dto';

@Controller('lessons')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  // @Post()
  // create(@Body() createLessonDto: CreateLessonDto) {
  //   return this.lessonService.create(createLessonDto);
  // }

  @Get()
  findAll() {
    return this.lessonService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.lessonService.findOne(+id);
  // }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.lessonService.findOne(name);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateLessonDto: UpdateLessonDto) {
  //   return this.lessonService.update(+id, updateLessonDto);
  // }

  @Put(':name')
  update(
    @Param('name')
    name: string,
    @Body()
    updateLessonDto: UpdateLessonDto,
  ) {
    return this.lessonService.update(name, updateLessonDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.lessonService.remove(+id);
  // }
}
