import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as dayjs from 'dayjs';
import { EntryService } from 'src/app/core/services/entry.service';
import { ResimService } from 'src/app/core/services/resim.service';
import { Entry } from 'src/app/entities/entry.model';

@Component({
  selector: 'app-blog-detay',
  templateUrl: './blog-detay.component.html',
  styleUrls: ['./blog-detay.component.scss'],
})
export class BlogDetayComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private entryService: EntryService,
    private resimService: ResimService
  ) {}

  entry?: Entry;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        console.log('id değeri ', params['id']);
        this.getByEntryId(params['id']);
      } else {
        console.log('geldim hata');
      }
    });
  }

  getByEntryId(id: number) {
    this.entryService.getById(id).subscribe((res) => {
      this.entry = res;
    });
  }

  chanceTime(time:dayjs.Dayjs){
    return dayjs(time).format('DD/MM/YYYY')
  }

}
