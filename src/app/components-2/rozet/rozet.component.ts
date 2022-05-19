import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rozet',
  templateUrl: './rozet.component.html',
  styleUrls: ['./rozet.component.scss']
})
export class RozetComponent implements OnInit {
  @Input("Resim") resim = "";
  @Input("baslik") baslik = "";
  @Input("aciklama") aciklama = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
