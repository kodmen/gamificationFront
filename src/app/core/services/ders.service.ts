import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ders } from '../models/ders';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class DersService {

  constructor(private http:HttpClient,private url:UrlService) { }

  getAll():Observable<Ders[]>{
     return this.http.get<Ders[]>(this.url.getUrl("/ders"))
  }
}
