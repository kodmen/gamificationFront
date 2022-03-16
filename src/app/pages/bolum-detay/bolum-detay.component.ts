import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BolumService } from 'src/app/core/services/bolum.service';
import { IBolum } from 'src/app/entities/bolum.model';

@Component({
  selector: 'app-bolum-detay',
  templateUrl: './bolum-detay.component.html',
  styleUrls: ['./bolum-detay.component.scss'],
})
export class BolumDetayComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private bolumService: BolumService
  ) {}

  public bolum: IBolum;
  private apiLoaded = false;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.getBolum(params['id']);
      } else {
        console.log('geldim hata');
      }

      if (!this.apiLoaded) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        document.body.appendChild(tag);
        this.apiLoaded = true;
      }

    });
  }

  getBolum(id: number) {
    this.bolumService.getByIdBolum(id).subscribe((res) => {
      this.bolum = res;
      console.log("bolum res");
      console.log(res);
      
    });
  }

  getVideoId(link: string): string {
    var video_id = this.bolum.videoLink.split('v=')[1];
    var ampersandPosition = video_id.indexOf('&');
    if (ampersandPosition != -1) {
      video_id = video_id.substring(0, ampersandPosition);
    }
    return video_id;
  }
}