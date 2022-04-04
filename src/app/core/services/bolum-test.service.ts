import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResultsOfExam } from 'src/app/entities/resultsOfExam.model';
import { ISoruTest } from 'src/app/entities/soru-test.model';
import { TestAnswer } from 'src/app/entities/testAnswer.model';

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

  cevapKontrol(testAnswer:TestAnswer):Observable<IResultsOfExam>{   
    return this.http.post(this.urlService.getUrl("/soru-tests/analiz"),testAnswer);
  }
  

}
