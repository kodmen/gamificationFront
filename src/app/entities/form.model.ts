import { IDers } from "./ders.model";
import { IYorum } from "./yorum.model";

export interface IForm {
    id?: number;
    baslik?: string | null;
    yorumlar1s?: IYorum[] | null;
    formDers?: IDers | null;
  }
  
  export class Form implements IForm {
    constructor(public id?: number, public baslik?: string | null, public yorumlar1s?: IYorum[] | null, public formDers?: IDers | null) {}
  }
  
  export function getFormIdentifier(form: IForm): number | undefined {
    return form.id;
  }
  