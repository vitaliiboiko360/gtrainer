import { Connection } from 'mongoose';
import { LessonSchema } from './lesson.schema';
import { MONGODB_CONNECTION } from 'src/db/constants';
import { LESSON_MODEL } from './constants';

export const lessonsProviders = [
  {
    provide: LESSON_MODEL,
    useFactory: (connection: Connection) =>
      connection.model('Lesson', LessonSchema),
    inject: [MONGODB_CONNECTION],
  },
];
