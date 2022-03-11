import { IDers } from "./ders.model";
import { IUser } from "./user.model";

export interface IOgretmen {
    id?: number;
    aciklama?: string | null;
    ogretmenUser?: IUser | null;
    derslers?: IDers[] | null;
  }
  
  export class Ogretmen implements IOgretmen {
    constructor(public id?: number, public aciklama?: string | null, public ogretmenUser?: IUser | null, public derslers?: IDers[] | null) {}
  }
  
  export function getOgretmenIdentifier(ogretmen: IOgretmen): number | undefined {
    return ogretmen.id;
  }
  