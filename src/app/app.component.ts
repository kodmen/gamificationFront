import { Component, OnInit } from '@angular/core';
import { Router ,NavigationEnd } from '@angular/router';
import { filter, Observable, Subject } from 'rxjs';
import { AppRoutingModule, routes } from './app-routing.module';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  name = 'Get Current Url Route Demo';
  arrayRouter:any;
  currentRoute: string;

  subject$ = new Subject();

  observerA = this.subject$.subscribe(
    (v) => {
      console.log("--", v,"--","--")
      this.currentRoute = this.getStringValue(v);
    }
  );

  getStringValue(value: any): string {
    return value.toString();
}

 

  constructor(public authService: AuthService,private router : Router) { 

     this.router.events.pipe(
    filter((event: any) => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      this.currentRoute = event.url;          
       this.subject$.next(event.url);
    });
   

  }
  
  logout() {
    this.authService.doLogout()
  }

  ngOnInit() {
  }

  yeniSifreDondur(url:string):boolean{
    let result = url.search("/yeni-sifre");
    console.log("result sonuc", result);
    if(result === 0) return true;
    return false;
  }
}
