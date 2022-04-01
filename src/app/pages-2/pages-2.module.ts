import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pages2RoutingModule } from './pages-2-routing.module';
import { BolumTestlerComponent } from './bolum-testler/bolum-testler.component';


@NgModule({
  declarations: [
    BolumTestlerComponent
  ],
  imports: [
    CommonModule,
    Pages2RoutingModule
  ]
})
export class Pages2Module { }
