import { Document } from 'mongoose';
import { LineObject } from './lesson.schema';

export interface Lesson extends Document {
  readonly audio: string;
  readonly lines: Array<LineObject>;
}
