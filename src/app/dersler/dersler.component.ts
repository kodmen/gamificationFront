import { Component, OnInit } from '@angular/core';
import { Ders } from '../core/models/ders';
import { DersService } from '../core/services/ders.service';

@Component({
  selector: 'app-dersler',
  templateUrl: './dersler.component.html',
  styleUrls: ['./dersler.component.scss']
})
export class DerslerComponent implements OnInit {

  constructor(private dersService:DersService) { }

  ngOnInit(): void {
    this.dersService.getAll().subscribe((res)=>{
      this.dersler = res;
      console.log("dersler listeleme");
    
      console.log(res)

    })
  }

  aciklamaYaziSabitle(aciklama:string):string{
    if(aciklama.length > 80) return aciklama.substring(0,80)+"..."
    return aciklama
  }

  dersler:Ders[] = [];


}
