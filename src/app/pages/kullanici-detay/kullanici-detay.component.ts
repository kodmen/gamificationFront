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


  getOgrImage(){
    if(this.ogrenci.studentUser.imageUrl === null){
      return "https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png"
    }else{
      return `http://localhost:8080/api/image?name=${this.ogrenci.studentUser.imageUrl}`
    }
  }

}
