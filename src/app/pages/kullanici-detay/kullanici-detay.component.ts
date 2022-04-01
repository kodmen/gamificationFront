import { Component, OnInit } from '@angular/core';
import { OgrenciService } from 'src/app/core/services/ogrenci.service';
import { UrlService } from 'src/app/core/services/url.service';
import { Ogrenci } from 'src/app/entities/ogrenci.model';

@Component({
  selector: 'app-kullanici-detay',
  templateUrl: './kullanici-detay.component.html',
  styleUrls: ['./kullanici-detay.component.scss']
})
export class KullaniciDetayComponent implements OnInit {

  constructor( protected ogrenciService: OgrenciService,public urlService:UrlService) { }

  ngOnInit(): void {
    this.getOgrenci();
    
  }

  ogrenci?: Ogrenci;
  isLoading = true;

  getOgrenci(){
    this.ogrenciService.getOgrenci().subscribe((res) => {
      this.isLoading = false;
      this.ogrenci = res;
      console.log(this.ogrenci);
      
    })

  }

}
