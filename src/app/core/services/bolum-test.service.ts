import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISoruTest } from 'src/app/entities/soru-test.model';

import { UrlService } from './url.service';


@Injectable({
  providedIn: 'root'
})
export class BolumTestService {

  constructor(private urlService:UrlService,private http:HttpClient) { }

  getSorular(bolum:string):Observable<ISoruTest[]>{
    return this.http.get<ISoruTest[]>(this.urlService.getUrl("/soru-tests/bolum/"+bolum));
  }

  getSorularById(id:number):Observable<ISoruTest>{
    return this.http.get<ISoruTest>(this.urlService.getUrl("/soru-tests/"+id));
  }

}
