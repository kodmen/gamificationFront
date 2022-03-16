import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Router } from '@angular/router';

import { CurrentUser } from '../core/models/currentUser';
import { RegisterUser } from '../core/models/registerUser';
import { JhipsterUser } from '../core/models/jhipsteruser';
import { IUser } from '../entities/user-management';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  endpoint: string = 'http://localhost:8080/api';

  // endpoint: string = 'http://164.92.229.255:8080/api';
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  private currentUser: CurrentUser;

  constructor(private http: HttpClient, public router: Router) {}

  signUp(user: RegisterUser): Observable<{}> {

    let api = `${this.endpoint}/register`;
    return this.http.post(api, user).pipe(catchError(this.handleError));
  }

  // Sign-in
  signIn(user: JhipsterUser) {
    return this.http.post<any>(`${this.endpoint}/authenticate`, user);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  // User profile
  getUserProfile(): Observable<IUser> {
    let api = `${this.endpoint}/account`;
    return this.http.get<any>(api, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {};
      }),
      catchError(this.handleError)
    );
  }

    //active user 
    activeUser(key:number):Observable<any>{

      let api = `${this.endpoint}/activate`;
      let queryParams = new HttpParams();
      queryParams = queryParams.append("key",key);
   
      //return this.http.get<UserInformation>(url,{params:queryParams});
      return this.http.get<any>(api,{params:queryParams}).pipe(
        map((res: Response) => {
          return res || {};
        }),
        catchError(this.handleError)
      );
    }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }


}
