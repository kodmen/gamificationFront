import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  private endpoint: string = 'https://egitim-partneri-back.herokuapp.com/api';

  getUrl(url:string):string{
    return this.endpoint+url;
  }

  

}
