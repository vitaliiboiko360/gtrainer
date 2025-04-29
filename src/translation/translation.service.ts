import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { I_Translation } from './translation.interface';
import { TRANSLATION_MODEL } from './constants';

@Injectable()
export class TranslationService {
  constructor(
    @Inject(TRANSLATION_MODEL)
    private translationService: Model<I_Translation>,
  ) {}
  // create(createTranslationDto: CreateTranslationDto) {
  //   return 'This action adds a new translation';
  // }
  findAll(): Promise<I_Translation[]> {
    return this.translationService.find().exec();
  }
  // findOne(id: number) {
  //   return `This action returns a #${id} translation`;
  // }

  findOne(name: string): Promise<I_Translation | null> {
    return this.translationService.findOne({ name: name }).exec();
  }

  // update(id: number, updateTranslationDto: UpdateTranslationDto) {
  //   return `This action updates a #${id} translation`;
  // }
  // remove(id: number) {
  //   return `This action removes a #${id} translation`;
  // }
}
