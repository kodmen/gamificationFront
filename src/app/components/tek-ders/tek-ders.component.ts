import { Component, Input, OnInit } from '@angular/core';
import { ResimService } from 'src/app/core/services/resim.service';
import { Ders } from 'src/app/entities/ders.model';

@Component({
  selector: 'app-tek-ders',
  templateUrl: './tek-ders.component.html',
  styleUrls: ['./tek-ders.component.scss']
})
export class TekDersComponent implements OnInit {

  // @Input() ders:Ders;

  constructor(public resimServis:ResimService) { }

  ngOnInit(): void {
  }

}
