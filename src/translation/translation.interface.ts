import { Document } from 'mongoose';
import { TranslationLine } from './translation';

export interface I_Translation extends Document {
  readonly name: string;
  readonly translations: Array<TranslationLine>;
}
