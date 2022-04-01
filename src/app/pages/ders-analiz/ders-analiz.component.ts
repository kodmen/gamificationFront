import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DersService } from 'src/app/core/services/ders.service';
import { KayitService } from 'src/app/core/services/kayit.service';
import { MufredatService } from 'src/app/core/services/mufredat.service';

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
    private mufredatService:MufredatService
  ) {}

  kayit?: IKayit;
  ders?: Ders;
  mufredat?: IMufredat;
  isLoading = true;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.getKayit(params['id']);
      } else {
        console.log('geldim hata');
      }
    });
  }

  getKayit(id: number) {
    this.kayitService.getKayitById(id).subscribe((res) => {
      this.isLoading = false;
      this.kayit = res;
      this.getDers(this.kayit.aitOldDers.id);
    });
  }

  getDers(id: number) {
    this.dersService.getById(id).subscribe((res) => {
      this.ders = res;
      console.log('ders');
      console.log(this.ders);
      this.getMufredat(this.ders.dersMufredat.id)
    });
  }

  getMufredat(id: number) {
    this.mufredatService.getById(id).subscribe(res=>{
      this.mufredat = res;
      console.log(this.mufredat);

      for (let index = 0; index < this.kayit.dersAnalizleris.length; index++) {
       this.kayit.dersAnalizleris[index].aitOldBolum = this.mufredat.bolumlers[index]; 
      }

      console.log(this.kayit);
      
     
      
    })
  }
}
