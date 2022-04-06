import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BolumService } from 'src/app/core/services/bolum.service';
import { IBolum } from 'src/app/entities/bolum.model';
import { NotificationService } from 'src/app/core/services/notification.service';
import { AuthService } from 'src/app/auth/auth.service';
import { KayitService } from 'src/app/core/services/kayit.service';

@Component({
  selector: 'app-bolum-detay',
  templateUrl: './bolum-detay.component.html',
  styleUrls: ['./bolum-detay.component.scss'],
})
export class BolumDetayComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private bolumService: BolumService,
    private authService: AuthService,
    private notificationService: NotificationService,
    public router: Router,
    private kayitService: KayitService
  ) {}

  public bolum: IBolum;
  private apiLoaded = false;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.getBolum(params['id']);
      } else {
        console.log('geldim hata');
      }

      if (!this.apiLoaded) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
        this.apiLoaded = true;
      }
    });
  }

  getBolum(id: number) {
    this.bolumService.getByIdBolum(id).subscribe((res) => {
      this.bolum = res;
      console.log('bolum res');
      console.log(res);
    });
  }

  getVideoId(link: string): string {
    var video_id = this.bolum.videoLink.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition != -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }
    return video_id;
  }

  getDersKayitVarMi(bolum: string): boolean {
    var kayitlimi;;

    this.kayitService.getKayitlimi(bolum).subscribe((res) => {
      console.log('res ne geliyor');
      console.log(res);

      kayitlimi = res;
      console.log('res kayita atandı');
      console.log(kayitlimi);
    });

    return kayitlimi;
  }

  testSayfasinaGit(bolum: string) {
    // kayitli mi sorgusu yap
    if (!this.authService.isLoggedIn) {
      this.notificationService.showError('sisteme giriş yapmalısınız', 'Hata');
    } else {
      this.kayitService.getKayitlimi(bolum).subscribe((res) => {
       
        if(res){
          this.router.navigate(['/testler', bolum]);
        }else{
          this.notificationService.showError('Derse kayıt olmalısınız', 'Hata');
        }

      });
     
    }
  }
}
