import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entry } from 'src/app/entities/entry.model';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class EntryService {


  constructor(private urlService:UrlService,private http:HttpClient) { }

  getAll():Observable<Entry[]>{
    return this.http.get<Entry[]>(this.urlService.getUrl("/entries"));
  }

  getAllByTag(tag:string):Observable<Entry[]>{

        const params = new HttpParams()
      .set('tag', tag)
 
    return this.http.get<Entry[]>(this.urlService.getUrl("/entries"),{params});
  }

  getById(id:number):Observable<Entry>{
    return this.http.get<Entry>(this.urlService.getUrl("/entries/"+id));
  }
}
