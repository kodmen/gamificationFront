import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/core/alert/alert.service';
import { BolumTestService } from 'src/app/core/services/bolum-test.service';
import { SoruTest } from 'src/app/entities/soru-test.model';

import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'app-bolum-testler',
  templateUrl: './bolum-testler.component.html',
  styleUrls: ['./bolum-testler.component.scss'],
})
export class BolumTestlerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private soruTestService: BolumTestService,
    private authService:AuthService,
    private notificationService:NotificationService,
    public router: Router,
  ) {}

  sorular?: SoruTest[];
  isLoading = true;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['bolum']) {
        this.getBolumTest(params['bolum']);
      } else {
        console.log('geldim hata');
      }
    });
  }

  getBolumTest(bolum: string) {
    this.soruTestService.getSorular(bolum).subscribe((res) => {
      this.isLoading = false;
      this.sorular = res;
    });
  }


  testSayfasinaGit(id:number){
    if(!this.authService.isLoggedIn){
      this.notificationService.showError("sisteme giriş yapmalısınız","Hata");
    }

    this.router.navigate(['./',id]);

  }

}
