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
import { PasswordChange } from '../entities/passwordChange.model';
import { UrlService } from '../core/services/url.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');

  private currentUser: CurrentUser;

  constructor(
    private http: HttpClient,
    public router: Router,
    private urlService: UrlService
  ) {}

  signUp(user: RegisterUser): Observable<{}> {
    return this.http
      .post(this.urlService.getUrl('/register'), user)
      .pipe(catchError(this.handleError));
  }

  // Sign-in
  signIn(user: JhipsterUser) {
    return this.http.post<any>(this.urlService.getUrl('/authenticate'), user);
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');

    return authToken !== null ? true : false;
  }

  private dahaOnceGirildiMi:boolean = false;

  authenticate(): Observable<any> {
    /**
     * burda birkere içeri girsin
     * istek atsın
     * gelen sonucu kaç dk olduğuna göre sayaç başlasın
     * sayacın içindeyse true dönsün sayacın dışındaysa falsa dönsün
     *
     */
    // let basarili = true;

    // // daha önce girildiyse bunu yap
    // if(this.dahaOnceGirildiMi){

    // }else{// daha önce girilmediyse bunu yap
    //   this.http.get<any>(this.urlService.getUrl('/authenticate')).subscribe({
    //         next: (res) => {
    //           if (res !== null) {

    //           }
    //         },
    //       });
    // }

    

    return this.http.get<any>(this.urlService.getUrl('/authenticate'));
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['log-in']);
    }
  }

  // User profile
  getUserProfile(): Observable<IUser> {
    return this.http
      .get<any>(this.urlService.getUrl('/account'), { headers: this.headers })
      .pipe(
        map((res: Response) => {
          return res || {};
        }),
        catchError(this.handleError)
      );
  }

  //active user
  activeUser(key: number): Observable<any> {
    let queryParams = new HttpParams();
    queryParams = queryParams.append('key', key);

    //return this.http.get<UserInformation>(url,{params:queryParams});
    return this.http
      .get<any>(this.urlService.getUrl('/activate'), { params: queryParams })
      .pipe(
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

  changePassword(passChange: PasswordChange): Observable<any> {
    return this.http.post(
      this.urlService.getUrl('/account/change-password'),
      passChange
    );
  }
}
