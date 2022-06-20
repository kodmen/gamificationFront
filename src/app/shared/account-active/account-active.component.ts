import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-account-active',
  templateUrl: './account-active.component.html',
  styleUrls: ['./account-active.component.scss']
})
export class AccountActiveComponent implements OnInit {

  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  isCheck: boolean = false;

  error = false;
  success = false;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['key']) {
          this.keyGonder(params['key']);
      } else {
      
      }
    });
  }
  
  keyGonder(key: number):void{
    console.log("hesap gönderiliyor");
    
    this.authService.activeUser(key).subscribe({
      next: () => {this.success= true},
      error: () => { this.error = true}
    }
        
    );
  }

}
