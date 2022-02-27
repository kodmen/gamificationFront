import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordInitServiceService {

  endpoint: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  save(mail: string): Observable<{}> {

    return this.http.post(`${this.endpoint}/account/reset-password/init`, mail);
  }
}
