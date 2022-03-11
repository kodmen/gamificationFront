import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { EntryService } from '../core/services/entry.service';
import { NotificationService } from '../core/services/notification.service';
import { ResimService } from '../core/services/resim.service';
import { Entry } from '../entities/entry.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(private entryService:EntryService,private uyari:NotificationService,public resimService:ResimService) { }
  entries?:Entry[];

  ngOnInit(): void {
    this.getAllEntry();
    console.log(this.entries);
  }

  getAllEntry(){
    this.entryService.getAll().subscribe(res=>{this.entries = res},err=>{this.uyari.showError("hata","istek atılamadı")})
  }


  chanceTime(time:dayjs.Dayjs){
    return dayjs(time).format('DD/MM/YYYY')
  }

  parametleriCagir(params:string){
    console.log("bRASI cagirildi");
    
    this.entryService.getAllByTag(params).subscribe(res =>{
      this.entries = res;
      console.log("entry değişti");
      console.log(this.entries);
      
      
    })
  }


}
