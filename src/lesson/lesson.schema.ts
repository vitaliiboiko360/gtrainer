import * as mongoose from 'mongoose';

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LessonDocument = HydratedDocument<Lesson>;

export type LineObject = { text: string; start: number; end: number };

@Schema()
export class Lesson {
  @Prop()
  audio: string;

  @Prop()
  lines: Array<LineObject>;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);

export const LessonSchema2 = new mongoose.Schema({
  name: String,
  age: Number,
  breed: String,
});
