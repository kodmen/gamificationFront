import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DersService } from 'src/app/core/services/ders.service';
import { KayitService } from 'src/app/core/services/kayit.service';
import { MufredatService } from 'src/app/core/services/mufredat.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { IBolum } from 'src/app/entities/bolum.model';
import { Ders, IDers } from 'src/app/entities/ders.model';
import { IMufredat } from 'src/app/entities/mufredat.model';

import { OrderPipe } from 'ngx-order-pipe';


@Component({
  selector: 'app-ders-detail',
  templateUrl: './ders-detail.component.html',
  styleUrls: ['./ders-detail.component.scss'],
})
export class DersDetailComponent implements OnInit {
  public id: number;
  public ders: IDers;
  public mufredat: IMufredat;
  public bolumler: IBolum[];

  public $mufredat: Observable<IMufredat>;
  public $bolumler: Observable<IBolum[]>;

  public bolumler$: Subject<IBolum[]>;

  order:string = "bolum.sira";
  sortedCollection: any[];

  constructor(
    private route: ActivatedRoute,
    private dersService: DersService,
    private mufredatService: MufredatService,
    private authService: AuthService,
    private kayitService: KayitService,
    private alertService: NotificationService,
    private orderPipe: OrderPipe
  ) { 

    
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.getDers(params['id']);
      } else {
        console.log('geldim hata');
      }
    });
  }

  derseKatil(id: number) {
    if (this.authService.isLoggedIn) {
      this.kayitService.saveKayit(id).subscribe(
        (res) => {
          console.log('kayit kaydoldu');
          console.log(res);
          this.alertService.showSuccess('tebrikler kayit başaralı', 'basarili');
        },
        (err) => {
          console.log(err);

          this.alertService.showError(err.error.title, 'HATA');
        }
      );
    } else {
      this.alertService.showError('lütfen giriş yapın', 'HATA');
      // login sayfasına göndermeli
    }
  }

  getDers(id: number) {
    this.dersService.getById(id).subscribe(
      (res) => {
        this.ders = res
        this.getMufredat();
        
      },
      (err) => console.log('hata')
    );
  }

  getUrlImage(img: string) {
    return `background-image: url(${img});`;
  }


  /**
   *[
  
    {
        "id": 1002,
        "bolumBaslik": "Sayı Basamakları",
        "dokuman": "Bir doğal sayıda rakamların her birinin bulunduğu yere basamak denir. Rakamların bulunduğu basamağa göre aldığı değere basamak değeri denir. Rakamların gösterdiği değere ise o rakamın sayı değeri denir. Sayılar basamak sayılarına göre isimlendirilir.",
        "puan": 15,
        "videoLink": "https://www.youtube.com/watch?v=TmrlARl29hE",
        "sure": "40",
        "sira": 2
    },
    {
        "id": 1003,
        "bolumBaslik": "Bölme ve Bölünebilme",
        "dokuman": "\nBÖLME:\n\nA, B, C, K birer doğal sayı ve B 0 olmak üzere,\n\nbölme işleminde,\n• A ya bölünen, B ye bölen, C ye bölüm, K ya kalan denir.\n• A = B . C + K dır.\n• Kalan, bölenden küçüktür. (K <>\n• Kalan, bölümden (C den) küçük ise, bölen (B) ile bölümün (C) yeri değiştirilebilir.\n• K = 0 ise, A sayısı B ile tam bölünebiliyor denir.",
        "puan": 20,
        "videoLink": "https://www.youtube.com/watch?v=d4X0zCeaRi8",
        "sure": "60",
        "sira": 3
    }
]
   */
  dersDuzenle(){
    this.sortedCollection = this.orderPipe.transform(this.mufredat.bolumlers, 'sira');
    console.log("ders duzenle içi");
    console.log(this.mufredat.bolumlers);
    console.log(this.sortedCollection);
    
    
    
  }

  getMufredat() {
    this.mufredatService.getById(this.ders.dersMufredat.id).subscribe((res) => {
      this.mufredat = res;
      this.dersDuzenle()
    });

  }
}
