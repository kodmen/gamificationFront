import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { Ogrenci } from 'src/app/entities/ogrenci.model';
import { IUser, User } from 'src/app/entities/user-management';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class OgrenciService {

  constructor(private urlService:UrlService,private authService:AuthService,private http:HttpClient) { }
  user?:IUser;
  aktifOgnerci?:Ogrenci;

  getOgrenci():Observable<Ogrenci>{
   return this.http.get<Ogrenci>(this.urlService.getUrl("/ogrenci"));
  }


}
