import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { map, Observable } from 'rxjs';
import { IDers } from 'src/app/entities/ders.model';
import { Ders } from '../models/ders';
import { UrlService } from './url.service';

export type EntityResponseType = HttpResponse<IDers>;
export type EntityArrayResponseType = HttpResponse<IDers[]>;


@Injectable({
  providedIn: 'root'
})
export class DersService {

  constructor(private http:HttpClient,private url:UrlService) { }

  getAll(): Observable<IDers[]>{
    //const options = createRequestOption(req);

     return this.http
     .get<IDers[]>(this.url.getUrl("/ders"));
  }

  getById(id:number):Observable<IDers>{
    return this.http.get<IDers>(this.url.getUrl("/ders/"+id));
  }

}
