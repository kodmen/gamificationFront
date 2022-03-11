import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { DersService } from 'src/app/core/services/ders.service';
import { MufredatService } from 'src/app/core/services/mufredat.service';
import { IBolum } from 'src/app/entities/bolum.model';
import { Ders, IDers } from 'src/app/entities/ders.model';
import { IMufredat } from 'src/app/entities/mufredat.model';

@Component({
  selector: 'app-ders-detail',
  templateUrl: './ders-detail.component.html',
  styleUrls: ['./ders-detail.component.scss']
})
export class DersDetailComponent implements OnInit {

  public id:number;
  public ders:IDers;
  public mufredat:IMufredat;
  public bolumler:IBolum[];

  public $mufredat:Observable<IMufredat>;
  public $bolumler:Observable<IBolum[]>;

  public bolumler$:Subject<IBolum[]>;

  constructor(private route:ActivatedRoute,private dersService:DersService,private mufredatService:MufredatService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
          this.getDers(params['id']);
      } else {
      console.log("geldim hata");
      
      }
    });
  }

  getDers(id:number){
    this.dersService.getById(id).subscribe(res => {
      this.ders =res,
      console.log(this.ders)
      this.getMufredat();
    }  ,err=> console.log("hata"))
  }

  getUrlImage(img:string){
    return `background-image: url(${img});`;
  }

  
  getUpdateBolum(){
    this.bolumler$.subscribe()
  }

  getMufredat(){
     this.mufredatService.getById(this.ders.dersMufredat.id).subscribe(res=>{
      // this.$bolumler = of(res.bolumlers);
      this.mufredat = res;
      this.bolumler$.next(res.bolumlers)
      //res.bolumlers.forEach(b=> this.bolumler$.next(b))
      // this.bolumler$.next()
    })
    // this.mufredatService.getById(this.ders.dersMufredat.id).subscribe(res=>{
    //   this.mufredat = res;
    //   this.bolumler = res.bolumlers;
    //   this.$bolumler = res;
    // },err=>{
    //   console.log("hata mufredat service");
      
    // })
  }

}
