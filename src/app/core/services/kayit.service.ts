import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Kayit } from 'src/app/entities/kayit.model';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root',
})
export class KayitService {
  constructor(private urlService: UrlService, private http: HttpClient) {}

  saveKayit(dersId: number): Observable<Kayit> {
    return this.http.post<Kayit>(this.urlService.getUrl('/kayit'), dersId);
  }

  getAllKayitByOgrenci(): Observable<Kayit[]> {
    return this.http.get<Kayit[]>(this.urlService.getUrl('/kayit'));
  }
}
