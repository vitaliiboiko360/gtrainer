import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { LineObject } from './lesson';

@Schema()
export class Lesson {
  @Prop()
  name: string;

  @Prop()
  audio: string;

  @Prop()
  lines: Array<LineObject>;
}

export type LessonDocument = HydratedDocument<Lesson>;

export const LessonSchema = SchemaFactory.createForClass(Lesson);
