import { IDersAnaliz } from "./ders-analiz.model";
import { IMufredat } from "./mufredat.model";
import { ISoruTest } from "./soru-test.model";

export interface IBolum {
    id?: number;
    bolumBaslik?: string | null;
    dokuman?: string | null;
    puan?: number | null;
    videoLink?: string | null;
    sure?: string | null;
    sira?: number | null;
    analizBolums?: IDersAnaliz[] | null;
    testlers?: ISoruTest[] | null;
    mufredatlars?: IMufredat[] | null;
  }
  
  export class Bolum implements IBolum {
    constructor(
      public id?: number,
      public bolumBaslik?: string | null,
      public dokuman?: string | null,
      public puan?: number | null,
      public videoLink?: string | null,
      public sure?: string | null,
      public sira?: number | null,
      public analizBolums?: IDersAnaliz[] | null,
      public testlers?: ISoruTest[] | null,
      public mufredatlars?: IMufredat[] | null
    ) {}
  }
  
  export function getBolumIdentifier(bolum: IBolum): number | undefined {
    return bolum.id;
  }
  