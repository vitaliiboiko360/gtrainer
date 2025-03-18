import * as mongoose from 'mongoose';
import { MONGODB_CONNECTION_STRING, MONGODB_CONNECTION } from './constants';

export const databaseProviders = [
  {
    provide: MONGODB_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(MONGODB_CONNECTION_STRING),
  },
];
