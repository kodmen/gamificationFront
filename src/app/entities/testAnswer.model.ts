export interface ITestAnswer {
    testId?: number;
    answers?: string[];
  }
  
  export class TestAnswer implements ITestAnswer {
    constructor(
      public testId?: number,
      public answers?: string[],
    ) {}
  }