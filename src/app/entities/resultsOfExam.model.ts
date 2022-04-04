export interface IResultsOfExam {
    countOfCorrect?: number;
    countOfWrong?: number;
    countOfBlank?: number;
    result?:cevaplar[];
  }
  
  export class ResultsOfExam implements IResultsOfExam {
    constructor(
        public countOfCorrect?: number,
        public countOfWrong?: number,
        public countOfBlank?: number,
        public result?:cevaplar[]
    ) {}
  }

  export enum cevaplar{
    dogru,yanlis,bos
  }