import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBolum } from 'src/app/entities/bolum.model';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class BolumService {

  constructor(private urlService:UrlService,private http:HttpClient) { }

  getByIdBolum(id:number):Observable<IBolum>{
      return this.http.get<IBolum>(this.urlService.getUrl("/bolums/"+id));
  }

}
