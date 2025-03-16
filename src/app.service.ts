import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  testGet(): string {
    return 'Test Get';
  }
}
