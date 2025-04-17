import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LessonDocument = HydratedDocument<Lesson>;

export type Translation = {
  indexInSentence: number;
  wordInEnglish: string;
  partOfSpeech: number;
};

export type LineObject = {
  text: string;
  start: number;
  end: number;
  orderNumber: number;
  speechParts: Array<number>;
  translations: Array<Translation>;
};

@Schema()
export class Lesson {
  @Prop()
  name: string;

  @Prop()
  audio: string;

  @Prop()
  lines: Array<LineObject>;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);
