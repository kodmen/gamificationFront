import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
// import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    // var token = "eyJ0eXAiO.../// jwt token";
    // var decoded = jwt_decode(token);
    // console.log(decoded);
    

    this.authService.authenticate().subscribe({
      next: (res) => {
        if (res === null) this.authService.doLogout();
      },
      error: (e) => console.log(e),
    });

    if (this.authService.isLoggedIn !== true) {
      window.alert('Access not allowed!');
      this.router.navigate(['log-in']);
    }
    return true;
  }
}
