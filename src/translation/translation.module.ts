import { Module } from '@nestjs/common';
import { TranslationService } from './translation.service';
import { TranslationController } from './translation.controller';
import { translationsProviders } from './translation.provider';
import { DatabaseModule } from 'src/db/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [TranslationController],
  providers: [TranslationService, ...translationsProviders],
})
export class TranslationModule {
  constructor(private translationService: TranslationService) {}
}
