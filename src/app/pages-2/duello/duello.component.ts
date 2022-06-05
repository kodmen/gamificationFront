import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duello',
  templateUrl: './duello.component.html',
  styleUrls: ['./duello.component.scss']
})
export class DuelloComponent implements OnInit {

  constructor() { }

  object = [
    {
      soruId:1,
      soruText: '(3x - 1)(x + 1) + (3x - 1)(x - 2) = 0 \rexitliğini sağlayan x gerçel sayılarının toplamı kaçtır?',
      cevap: 2,
      cevaplar: [
        { cevapText: '2/3', id: 1 },
        { cevapText: '3/4', id: 2 },
        { cevapText: '3/5', id: 3 },
        { cevapText: '7/6', id: 4 },
      ],
    },
    {
      soruId:2,
      soruText: 'Number(\"1\") - 1 == 0; \rWhat is the result? 2',
      cevap: 3,
      cevaplar: [
        { cevapText: 'cevap 1', id: 1 },
        { cevapText: 'cevap 2', id: 2 },
        { cevapText: 'cevap 3', id: 3 },
        { cevapText: 'cevap 4', id: 4 },
      ],
    },
    {
      soruId:3,
      soruText: 'Number(\"1\") - 1 == 0; \rWhat is the result?',
      cevap: 2,
      cevaplar: [
        { cevapText: 'cevap 1', id: 1 },
        { cevapText: 'cevap 2', id: 2 },
        { cevapText: 'cevap 3', id: 3 },
        { cevapText: 'cevap 4', id: 4 },
      ],
    },
    {
      soruId:4,
      soruText: 'Number(\"1\") - 1 == 0; \rWhat is the result?',
      cevap: 2,
      cevaplar: [
        { cevapText: 'cevap 1', id: 1 },
        { cevapText: 'cevap 2', id: 2 },
        { cevapText: 'cevap 3', id: 3 },
        { cevapText: 'cevap 4', id: 4 },
      ],
    },
    {
      soruId:5,
      soruText: 'Number(\"1\") - 1 == 0; \rWhat is the result?',
      cevap: 2,
      cevaplar: [
        { cevapText: 'cevap 1', id: 1 },
        { cevapText: 'cevap 2', id: 2 },
        { cevapText: 'cevap 3', id: 3 },
        { cevapText: 'cevap 4', id: 4 },
      ],
    },
    {
      soruId:6,
      soruText: 'Number(\"1\") - 1 == 0; \rWhat is the result?',
      cevap: 2,
      cevaplar: [
        { cevapText: 'cevap 1', id: 1 },
        { cevapText: 'cevap 2', id: 2 },
        { cevapText: 'cevap 3', id: 3 },
        { cevapText: 'cevap 4', id: 4 },
      ],
    },
    {
      soruId:7,
      soruText: 'Number(\"1\") - 1 == 0; \rWhat is the result?',
      cevap: 2,
      cevaplar: [
        { cevapText: 'cevap 1', id: 1 },
        { cevapText: 'cevap 2', id: 2 },
        { cevapText: 'cevap 3', id: 3 },
        { cevapText: 'cevap 4', id: 4 },
      ],
    },
    {
      soruId:8,
      soruText: 'Number(\"1\") - 1 == 0; \rWhat is the result?',
      cevap: 2,
      cevaplar: [
        { cevapText: 'cevap 1', id: 1 },
        { cevapText: 'cevap 2', id: 2 },
        { cevapText: 'cevap 3', id: 3 },
        { cevapText: 'cevap 4', id: 4 },
      ],
    },
    {
      soruId:9,
      soruText: 'Number(\"1\") - 1 == 0; \rWhat is the result?',
      cevap: 2,
      cevaplar: [
        { cevapText: 'cevap 1', id: 1 },
        { cevapText: 'cevap 2', id: 2 },
        { cevapText: 'cevap 3', id: 3 },
        { cevapText: 'cevap 4', id: 4 },
      ],
    },
    {
      soruId:10,
      soruText: 'Number(\"1\") - 1 == 0; \rWhat is the result?',
      cevap: 2,
      cevaplar: [
        { cevapText: 'cevap 1', id: 1 },
        { cevapText: 'cevap 2', id: 2 },
        { cevapText: 'cevap 3', id: 3 },
        { cevapText: 'cevap 4', id: 4 },
      ],
    },

  ];

  tekCevap:boolean = false;
  tekCevapYazi:string = "";

  score:number = 0;

  ngOnInit(): void {
    this.count = 0;
    this.bekle();
  }

  count: number;
  

  next() {
    if (this.object.length-1 > this.count) {
      this.count++;
    }
    this.bekle();
  }
  
  prev() {
    if (this.count > 0) {
      this.count--;
    }
    this.bekle();
  }

  canDusman:number = 0;
  canBen:number = 0;

  bekleDurum:boolean = true;
  dayakYeDurum:boolean = false;
  dayakAtDurum:boolean = false;

  dovusBasla(){
    this.canBen = 100;
    this.canDusman = 100;
  }

  bekle(){
    this.bekleDurum = true;
    this.dayakAtDurum = false;
    this.dayakYeDurum = false;
    this.tekCevap = false;
  }


  dayakYe(){
    this.bekleDurum = false;
    this.dayakAtDurum = false;
    this.dayakYeDurum = true;
  }

  dayakAt(){
    this.bekleDurum = false;
    this.dayakAtDurum = true;
    this.dayakYeDurum = false;
  }

  /**
   * dövüş olayını swich kase olarak mı ayarlamalıyım
   * olaylar 
   * 1.bekleme
   * 2.dövme
   * 3.dayak yeme
   */

  cevap(id:number,soruId:number){

    if(!this.bekleDurum == false){
var soru = this.object.filter(soru => soru.soruId == soruId);
    if(soru[0].cevap == id){
      this.score++;
      this.tekCevap= true;
      this.tekCevapYazi = "başarılı doğru cevap"
      console.log("cevap doğru");
      this.dayakAt();
    }else{
      this.score--;
      this.tekCevap= true;
      this.tekCevapYazi = "malesef yanlış cevap"
      console.log("cevap yanlış");
      this.dayakYe();
    }  
    }
    

  }

  getSoruClass(){
    if(this.tekCevap){
      if(this.tekCevapYazi == "başarılı doğru cevap"){
        return "border-3 border border-success"
      }else{
        return "border-3 border border-danger"
      }
    }
    
  }

}
