export type Translation = {
  indexInSentence: number;
  wordInEnglish: string;
  partOfSpeech: number;
};

export type LineObject = {
  text: string;
  start: number;
  end: number;
  wordCount: number;
  lineNumber: number;
  speechParts: Array<number>;
  translations: Array<Translation>;
};

export class LessonBase {
  name: string;
  audio: string;
  lines: Array<LineObject>;
}
