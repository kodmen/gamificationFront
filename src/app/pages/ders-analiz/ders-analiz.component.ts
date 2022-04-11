import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { DersAnalizService } from 'src/app/core/services/ders-analiz.service';
import { DersService } from 'src/app/core/services/ders.service';
import { KayitService } from 'src/app/core/services/kayit.service';
import { MufredatService } from 'src/app/core/services/mufredat.service';
import { DersAnaliz } from 'src/app/entities/ders-analiz.model';

import { Ders } from 'src/app/entities/ders.model';
import { IKayit, Kayit } from 'src/app/entities/kayit.model';
import { IMufredat } from 'src/app/entities/mufredat.model';

import { OrderPipe } from 'ngx-order-pipe';

@Component({
  selector: 'app-ders-analiz',
  templateUrl: './ders-analiz.component.html',
  styleUrls: ['./ders-analiz.component.scss'],
})
export class DersAnalizComponent implements OnInit, AfterViewInit {
  constructor(
    private route: ActivatedRoute,
    private kayitService: KayitService,
    private dersService: DersService,
    private mufredatService: MufredatService,
    private dersAnalizService: DersAnalizService,
    private orderPipe: OrderPipe
  ) {}

  //** ders sıralama işlemi  */
  order: string = 'bolum.sira';
  sortedCollection: any[];

  dersDuzenle() {
    /**
     * [
          {
              "id": 4352,
              "toplamYanlis": 0,
              "toplamDogru": 0,
              "cozulenSoru": 0,
              "tamamlandi": false,
              "aitOldBolum": {
                  "id": 1002,
                  "bolumBaslik": "Sayı Basamakları",
                  "dokuman": "Bir doğal sayıda rakamların her birinin bulunduğu yere basamak denir. Rakamların bulunduğu basamağa göre aldığı değere basamak değeri denir. Rakamların gösterdiği değere ise o rakamın sayı değeri denir. Sayılar basamak sayılarına göre isimlendirilir.",
                  "puan": 15,
                  "videoLink": "https://www.youtube.com/watch?v=TmrlARl29hE",
                  "sure": "40",
                  "sira": 2
              },
              "kayitlar3s": null
          }

        ]
     */
    console.log('ders duzenle içi');
    console.log(this.AllDersAnaliz);

    this.sortedCollection = this.orderPipe.transform(
      this.AllDersAnaliz,
      'aitOldBolum.sira'
    );
    console.log('düzenli dizi ');
    console.log(this.sortedCollection);
  }
  //** ders sıralama işlemi bitiş */

  kayit?: IKayit;
  ders?: Ders;
  mufredat?: IMufredat;
  isLoading = true;
  _dersAnaliz = new Subject<DersAnaliz>();

  AllDersAnaliz: DersAnaliz[] = new Array<DersAnaliz>();

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.getKayit(params['id']);
      } else {
        console.log('geldim hata');
      }
    });

    this.getAllDersAnaliz().subscribe((res) => {
      //this.AllDersAnaliz.push(res);
      this.diziYeniElemanEkleme(res)
    });
  }

  diziYeniElemanEkleme(dizi:any){
    console.log("yeni deneden");
    
    Object.assign(dizi, {sira: dizi.aitOldBolum.sira});
    console.log(dizi);
    this.AllDersAnaliz.push(dizi);
  }

  ngAfterViewInit() {
    this.dersDuzenle();
  }

  getKayit(id: number) {
    this.kayitService.getKayitById(id).subscribe((res) => {
      this.isLoading = false;
      this.kayit = res;
      this.getDersAnaliz(this.kayit);
    });
  }

  getDersAnaliz(kayit: Kayit) {
    const obs = new Observable();
    for (var i = 0; i < kayit.dersAnalizleris.length; i++) {
      this.dersAnalizService
        .getDersAnalizById(kayit.dersAnalizleris[i].id)
        .subscribe((res) => {
          this._dersAnaliz.next(res);
        },err=>{},()=>{
          this.dersDuzenle();
        });

      // if(i == kayit.dersAnalizleris.length-1){
      //   this._dersAnaliz.unsubscribe();
      // }
    }
    //this.dersDuzenle();
  }

  getAllDersAnaliz(): Observable<DersAnaliz> {
    return this._dersAnaliz.asObservable();
  }

  getProgressBarStyle(toplamSoru: number, soru: number) {
    var yuzde = (soru * 100) / toplamSoru;
    return `width: ${yuzde}% `;
  }
}
