import { Component, OnInit } from '@angular/core';
import { KayitService } from 'src/app/core/services/kayit.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { ResimService } from 'src/app/core/services/resim.service';
import { Kayit } from 'src/app/entities/kayit.model';

@Component({
  selector: 'app-kayitli-dersler',
  templateUrl: './kayitli-dersler.component.html',
  styleUrls: ['./kayitli-dersler.component.scss']
})
export class KayitliDerslerComponent implements OnInit {

  constructor(private kayitService:KayitService,private alertService:NotificationService,public resimService:ResimService) { }
  dersler?:Kayit[];
  ngOnInit(): void {
    this.getKayit();    
  }

  getKayit(){
    this.kayitService.getAllKayitByOgrenci().subscribe(res=>{
      this.dersler=res;
      console.log(res);
      
    },err=>{
      this.alertService.showError(err.error.titel,"HATA");
    })
  }

}
