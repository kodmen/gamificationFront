import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IYorum } from 'src/app/entities/yorum.model';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class YorumService {

  constructor(private urlService:UrlService,private http:HttpClient) { }

  getAllByFormId(id:number): Observable<IYorum[]>{
     return this.http.get<IYorum[]>(this.urlService.getUrl("/yorums/form/"+id));
  }
}
