import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Account } from 'src/app/entities/account.model';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http:HttpClient,private urlService:UrlService) { }

  save(account: Account): Observable<{}> {
    return this.http.post(this.urlService.getUrl('/account'), account);
  }
}
