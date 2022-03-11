import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IForm } from 'src/app/entities/form.model';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http:HttpClient,private url:UrlService) { }

  getById(id:number):Observable<IForm>{
    return this.http.get<IForm>(this.url.getUrl("/forms/"+id));
  }

  
}
