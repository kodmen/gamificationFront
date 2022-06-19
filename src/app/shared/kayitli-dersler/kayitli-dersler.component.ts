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
  isLoading = false;

  ngOnInit(): void {
    

    this.getKayit();    
  }

  getKayit(){
    this.isLoading = true;
    this.kayitService.getAllKayitByOgrenci().subscribe(res=>{
      this.dersler=res;
      this.isLoading = false;
      console.log(res);
      
    },err=>{
      this.isLoading = false;
      this.alertService.showError(err.error.titel,"HATA");
    })
  }

}
