import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MyInitService {

  constructor(private authService:AuthService) { 

  }

  initCheck(){
    // if(localStorage.getItem("access_token") === null){
    //   this.authService.doLogout();
    // }


  }
}
