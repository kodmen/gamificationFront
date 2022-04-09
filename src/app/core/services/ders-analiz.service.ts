import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DersAnaliz } from 'src/app/entities/ders-analiz.model';
import { Ders } from '../models/ders';
import { UrlService } from './url.service';
@Injectable({
  providedIn: 'root'
})
export class DersAnalizService {

  constructor(private urlService:UrlService,private http:HttpClient ) { }

  getDersAnalizById(id:number):Observable<DersAnaliz>{
    return this.http.get<DersAnaliz>(this.urlService.getUrl("/ders-analizs/"+id));
  }

}
