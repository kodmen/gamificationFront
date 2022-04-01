import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolumTestlerComponent } from './bolum-testler/bolum-testler.component';

const routes: Routes = [
  { path: '', component: BolumTestlerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pages2RoutingModule { }
