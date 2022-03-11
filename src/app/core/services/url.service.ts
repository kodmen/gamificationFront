import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor() { }

  private endpoint: string = 'http://localhost:8080/api';

  getUrl(url:string):string{
    return this.endpoint+url;
  }

}
