import { Component, OnInit } from '@angular/core';
import { OgrenciService } from 'src/app/core/services/ogrenci.service';
import { UrlService } from 'src/app/core/services/url.service';
import { Ogrenci } from 'src/app/entities/ogrenci.model';

@Component({
  selector: 'app-kullanici-detay',
  templateUrl: './kullanici-detay.component.html',
  styleUrls: ['./kullanici-detay.component.scss'],
})
export class KullaniciDetayComponent implements OnInit {
  constructor(
    protected ogrenciService: OgrenciService,
    public urlService: UrlService
  ) {}

  rozetArray = [
    {
      resim: 'assets/img/rozetler/1.png',
      baslik: '100 soru',
      aciklama: 'tebrikler 100 soru barajını aştınız',
    },
    {
      resim: 'assets/img/rozetler/2.png',
      baslik: 'Intereptor',
      aciklama: 'Pas şeritlerinde top çalma şansınızı artırır.',
    },
    {
      resim: 'assets/img/rozetler/3.png',
      baslik: 'Menace',
      aciklama: 'Savunma yaparken rakiplerinizi daha rahat engelleyebilmenizi sağlar.',
    },
    {
      resim: 'assets/img/rozetler/4.png',
      baslik: 'Chase Down Artist',
      aciklama: 'Oyuncunun bir takip bloğu alma yeteneğini geliştirir.',
    },
    {
      resim: 'assets/img/rozetler/5.png',
      baslik: 'Clamps',
      aciklama: 'Çevredeki top tutucunun önünde kalma yeteneğinizi geliştirir.',
    },
    {
      resim: 'assets/img/rozetler/6.png',
      baslik: 'Brick Wall',
      aciklama: 'Rakiplerin fiziksel vuruşlarda normalden daha fazla enerji kaybetmesine neden olur.',
    },
    {
      resim: 'assets/img/rozetler/7.png',
      baslik: 'Ball Stripper',
      aciklama: 'Bir rakip sepete doğru gittiğinde sıyrılma olasılığını arttırır',
    },
    {
      resim: 'assets/img/rozetler/8.png',
      baslik: 'Box',
      aciklama: 'Rakipleri etkili bir şekilde alt etme yeteneğinizi geliştirir',
    },
  ];


  ngOnInit(): void {
    this.getOgrenci();
  }

  ogrenci?: Ogrenci;
  isLoading = true;

  getOgrenci() {
    this.ogrenciService.getOgrenci().subscribe((res) => {
      this.isLoading = false;
      this.ogrenci = res;
      console.log(this.ogrenci);
    });
  }

  getOgrImage() {
    if (this.ogrenci.studentUser.imageUrl === null) {
      return 'https://www.kindpng.com/picc/m/24-248253_user-profile-default-image-png-clipart-png-download.png';
    } else {
      return this.urlService.getUrl(`/image?name=${this.ogrenci.studentUser.imageUrl}`);
    }
  }
}
