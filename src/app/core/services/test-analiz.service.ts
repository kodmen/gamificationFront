import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TestAnaliz } from 'src/app/entities/test-analiz.model';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class TestAnalizService {

  constructor(private urlService:UrlService,private http:HttpClient) { }

  getUserTest(bolumName:string):Observable<TestAnaliz[]>{
    return this.http.get<TestAnaliz[]>(this.urlService.getUrl("/test-analizs/bolum/"+bolumName));
  }
}
