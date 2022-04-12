import { Component, OnInit } from '@angular/core';
import { TopUserListDto } from 'src/app/core/models/topUserList';
import { OgrenciService } from 'src/app/core/services/ogrenci.service';
import { ResimService } from 'src/app/core/services/resim.service';
import { Ogrenci } from 'src/app/entities/ogrenci.model';

@Component({
  selector: 'app-basari-siralama',
  templateUrl: './basari-siralama.component.html',
  styleUrls: ['./basari-siralama.component.scss'],
})
export class BasariSiralamaComponent implements OnInit {
  constructor(
    private ogrenciSerice: OgrenciService,
    public resimService: ResimService
  ) {}

  top10Ogr?: TopUserListDto[];

  ngOnInit(): void {
    this.getOgr();
  }

  getOgr() {
    this.ogrenciSerice.getListTop10Ogr().subscribe((res) => {
      this.top10Ogr = res;
      console.log(this.top10Ogr);
    });
  }
}
