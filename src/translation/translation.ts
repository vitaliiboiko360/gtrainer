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

type TranslationLine = {
  originalLine: string;
  translation: TranslationLineDetails;
};

export interface TranslationBase {
  translations: Array<TranslationLine>;
}
