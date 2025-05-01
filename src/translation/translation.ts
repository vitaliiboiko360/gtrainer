type EnglishWord = {
  englishWord: string;
  spanishWords: string;
  frequency: string;
};

type WordsSpeechPart = {
  partOfSpeech: string;
  words: Array<EnglishWord>;
};

type WordDetails = {
  originalWord: string;
  translations: Array<WordsSpeechPart>;
};

type TranslationLineDetails = {
  sentenceEnglishTranslation: string;
  translations: Array<WordDetails>;
};

export type TranslationLine = {
  originalLine: string;
  translation: TranslationLineDetails;
};

export class TranslationBase {
  name: string;
  translations: Array<TranslationLine>;
}
