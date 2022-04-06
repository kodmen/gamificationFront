import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/core/alert/alert.service';
import { BolumTestService } from 'src/app/core/services/bolum-test.service';
import { SoruTest } from 'src/app/entities/soru-test.model';

import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/auth/auth.service';
import { TestAnaliz } from 'src/app/entities/test-analiz.model';
import { TestAnalizService } from 'src/app/core/services/test-analiz.service';

@Component({
  selector: 'app-bolum-testler',
  templateUrl: './bolum-testler.component.html',
  styleUrls: ['./bolum-testler.component.scss'],
})
export class BolumTestlerComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private soruTestService: BolumTestService,
    private authService: AuthService,
    private notificationService: NotificationService,
    public router: Router,
    public testAnalizService: TestAnalizService
  ) {}

  testAnalizLer?: TestAnaliz[];
  sorular?: SoruTest[];
  isLoading = true;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['bolum']) {
        this.getBolumTest(params['bolum']);
        this.getTestAnaliz(params['bolum']);
      } else {
        console.log('geldim hata');
      }
    });
  }

  getTestAnaliz(bolum: string) {
    this.testAnalizService.getUserTest(bolum).subscribe(
      (res) => {
        this.testAnalizLer = res;
        console.log(res);
        console.log('---------');

        console.log(this.testAnalizLer);
      },
      (err) => {
        console.log('test analizler gelirken hata oluştu');
      }
    );
  }

  getBolumTest(bolum: string) {
    this.soruTestService.getSorular(bolum).subscribe((res) => {
      this.isLoading = false;
      this.sorular = res;
    });
  }

  testSayfasinaGit(id: number) {
    if (!this.authService.isLoggedIn) {
      this.notificationService.showError('sisteme giriş yapmalısınız', 'Hata');
    }

    this.router.navigate(['./', id]);
  }

  testAnaliziVarMi(gercektestId: number): boolean {
    var temp = false;

    this.testAnalizLer.forEach((t) => {
      console.log('test analizler ', t.testId, gercektestId);

      if (t.testId == gercektestId) {
        console.log('iceri girdi');
        temp = true;
      }
    });

    return temp;
  }

  testAnalizGetir(testId:number):TestAnaliz{
    var temp:TestAnaliz;

    this.testAnalizLer.forEach((t) => {
      if (t.testId == testId) {
        temp = t;
      }
    });

    return temp;
  }

   // başarı yüzdesi haspla
   getSussecsRate(testAnaliz:TestAnaliz,test:SoruTest) {
    return (testAnaliz.dogru * 100) / test.soruSayisi;
  }

  

}
