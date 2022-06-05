import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

//https://codepen.io/robcopeland/pen/dWKwxz
@Component({
  selector: 'app-healty-bar',
  templateUrl: './healty-bar.component.html',
  styleUrls: ['./healty-bar.component.scss']
})
export class HealtyBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //emit 0 after 1 second then complete, since no second argument is supplied
  public source = timer(1000,2000);
  //output: 0
  public subscribe = this.source.subscribe(val => this.sayac = (99 - val));
  public sayac:number = 100;

}
