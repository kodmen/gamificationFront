import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetFinishService {

  endpoint: string = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  save(key: string, newPassword: string): Observable<{}> {
    return this.http.post(`${this.endpoint}/account/reset-password/finish`, { key, newPassword });
  }
}
