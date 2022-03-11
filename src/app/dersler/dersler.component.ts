import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Ders } from '../core/models/ders';
import { DataUtilService } from '../core/services/data-util.service';
import { DersService } from '../core/services/ders.service';
import { IDers } from '../entities/ders.model';

@Component({
  selector: 'app-dersler',
  templateUrl: './dersler.component.html',
  styleUrls: ['./dersler.component.scss']
})
export class DerslerComponent implements OnInit {

  constructor(private dersService:DersService,private dataUtils:DataUtilService) { }
  dersler?: IDers[];
  isLoading = false;

  loadAll(): void {
    this.isLoading = true;

    this.dersService.getAll().subscribe({
      next: (res: IDers[]) => {
        this.isLoading = false;
        this.dersler = res ?? [];
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  ngOnInit(): void {

    this.loadAll();
    // this.dersService.getAll().subscribe((res)=>{
    //   this.dersler = res;
    //   console.log("dersler listeleme");
    
    //   console.log(res)

    // })

  }

  getUrlImage(img:string){
    return `background-image: url(${img});`;
  }

  aciklamaYaziSabitle(aciklama:string):string{
    if(aciklama.length > 180) return aciklama.substring(0,180)+"..."
    return aciklama
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    this.dataUtils.openFile(base64String, contentType);
  }

}
