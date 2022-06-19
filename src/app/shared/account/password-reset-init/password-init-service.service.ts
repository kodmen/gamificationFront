import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlService } from 'src/app/core/services/url.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordInitServiceService {


  constructor(private http: HttpClient,private urlService:UrlService) {}

  save(mail: string): Observable<{}> {

    return this.http.post(this.urlService.getUrl("/account/reset-password/init"), mail);
  }
}
