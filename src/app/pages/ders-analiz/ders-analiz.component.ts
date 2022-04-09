import { Component, Input, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-ders-analiz',
  templateUrl: './ders-analiz.component.html',
  styleUrls: ['./ders-analiz.component.scss'],
})
export class DersAnalizComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private kayitService: KayitService,
    private dersService: DersService,
    private mufredatService: MufredatService,
    private dersAnalizService: DersAnalizService
  ) {}

  kayit?: IKayit;
  ders?: Ders;
  mufredat?: IMufredat;
  isLoading = true;
  _dersAnaliz = new Subject<DersAnaliz>();

  AllDersAnaliz : DersAnaliz[] = new Array<DersAnaliz>() ;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.getKayit(params['id']);
      } else {
        console.log('geldim hata');
      }
    });

    this.getAllDersAnaliz().subscribe(res=>{
      this.AllDersAnaliz.push(res)
    })
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
        });
    }
  }

  getAllDersAnaliz(): Observable<DersAnaliz> {
    return this._dersAnaliz.asObservable();
  }

  getProgressBarStyle(toplamSoru:number, soru:number){
    var yuzde = (soru * 100 ) / toplamSoru;
    return `width: ${yuzde}% `;
  }
}
