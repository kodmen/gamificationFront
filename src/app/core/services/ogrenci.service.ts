import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { IOgrenci, Ogrenci } from 'src/app/entities/ogrenci.model';
import { IUser, User } from 'src/app/entities/user-management';
import { TopUserListDto } from '../models/topUserList';
import { EntityResponseType } from './ders.service';
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

  partialUpdate(ogrenci: IOgrenci): Observable<EntityResponseType> {
    return this.http.patch<IOgrenci>(this.urlService.getUrl("/ogrencis/"+ogrenci.id), ogrenci, { observe: 'response' });
  }

  getListTop10Ogr():Observable<TopUserListDto[]>{
    return this.http.get<TopUserListDto[]>(this.urlService.getUrl("/ogrenci/listele"));
  
  }

}
