import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DersDetailComponent } from './ders-detail/ders-detail.component';
import { BolumDetayComponent } from './bolum-detay/bolum-detay.component';
import { VideoPlayerComponent } from '../components/video-player/video-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormMessageComponent } from './form-message/form-message.component';
import { BlogDetayComponent } from './blog-detay/blog-detay.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { KullaniciDetayComponent } from './kullanici-detay/kullanici-detay.component';
import { FormsModule } from '@angular/forms';
import { DersAnalizComponent } from './ders-analiz/ders-analiz.component';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    DersDetailComponent,
    BolumDetayComponent,
    FormMessageComponent,
    BlogDetayComponent,
    HakkimizdaComponent,
    IletisimComponent,
    KullaniciDetayComponent,
    DersAnalizComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, YouTubePlayerModule],
  exports: [
    DersDetailComponent,
    BolumDetayComponent,
    FormMessageComponent,
    BlogDetayComponent,
    HakkimizdaComponent,
    IletisimComponent,
    KullaniciDetayComponent,
    CommonModule,
    FormsModule,
  ],
})
export class PagesModule {}
