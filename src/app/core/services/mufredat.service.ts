import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMufredat } from 'src/app/entities/mufredat.model';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class MufredatService {

  constructor(private urlService:UrlService,private http:HttpClient) { }

  getById(id:number):Observable<IMufredat>{
    return this.http.get<IMufredat>(this.urlService.getUrl("/mufredats/"+id));
  }
}
