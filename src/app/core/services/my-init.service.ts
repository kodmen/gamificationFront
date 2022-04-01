import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MyInitService {

  constructor(private authService:AuthService) { 

  }

  initCheck(){
    if(this.authService.isLoggedIn){
      //this.authService.doLogout();
      // burda her istekten sonra kullanıcı jwt token süresi kontrol edilebilir
    }
  }
}
