import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { TranslationLine } from './translation';

@Schema()
export class Translation {
  @Prop()
  name: string;

  @Prop()
  translations: Array<TranslationLine>;
}

export type TranslationDocument = HydratedDocument<Translation>;

export const TranslationSchema = SchemaFactory.createForClass(Translation);
