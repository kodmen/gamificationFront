import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DersDetailComponent } from './ders-detail/ders-detail.component';
import { BolumDetayComponent } from './bolum-detay/bolum-detay.component';
import { VideoPlayerComponent } from '../components/video-player/video-player.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormMessageComponent } from './form-message/form-message.component';
import { AppModule } from '../app.module';
import { BlogDetayComponent } from './blog-detay/blog-detay.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { IletisimComponent } from './iletisim/iletisim.component';


@NgModule({
  declarations: [DersDetailComponent, BolumDetayComponent, FormMessageComponent, BlogDetayComponent, HakkimizdaComponent, IletisimComponent],
  imports: [CommonModule, PagesRoutingModule,YouTubePlayerModule]
})
export class PagesModule {}