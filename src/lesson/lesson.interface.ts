import { Document } from 'mongoose';
import { LineObject } from './lesson';

export interface I_Lesson extends Document {
  readonly name: string;
  readonly audio: string;
  readonly lines: Array<LineObject>;
}
