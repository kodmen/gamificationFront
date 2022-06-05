import { Component, OnInit } from '@angular/core';
import { TestModel } from './test.model';

@Component({
  selector: 'app-test-quiz',
  templateUrl: './test-quiz.component.html',
  styleUrls: ['./test-quiz.component.scss'],
})
export class TestQuizComponent implements OnInit {
  constructor() {}

  object = [
    {
      soruId:1,
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
  ];

  ngOnInit(): void {
    this.count = 0;
  }

  count: number;

  next() {
    if (this.object.length-1 > this.count) {
      this.count++;
      console.log('nex tıklandı', this.count);
    }
  }
  
  prev() {
    if (this.count > 0) {
      this.count--;
      console.log('prew tıklandı', this.count);
    }
  }


  cevap(id:number,soruId:number){

    var soru = this.object.filter(soru => soru.soruId == soruId);
    if(soru[0].cevap == id){
      console.log("cevap doğru");
    }else{
      console.log("cevap yanlış");
      
    }    
  }
}
