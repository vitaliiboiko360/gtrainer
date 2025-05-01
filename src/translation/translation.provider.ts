import { Connection } from 'mongoose';
import { MONGODB_CONNECTION } from '../db/constants';
import { TRANSLATION_MODEL } from './constants';
import { TranslationSchema } from './translation.schema';

export const translationsProviders = [
  {
    provide: TRANSLATION_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Translation', TranslationSchema),
    inject: [MONGODB_CONNECTION],
  },
];
