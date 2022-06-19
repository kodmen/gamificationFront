import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from 'src/app/core/services/url.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetFinishService {


  constructor(private http: HttpClient,private urlService:UrlService) {}

  save(key: string, newPassword: string): Observable<{}> {
    return this.http.post(this.urlService.getUrl("/account/reset-password/finish"), { key, newPassword });
  }
}
