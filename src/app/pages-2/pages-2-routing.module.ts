import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BolumTestlerComponent } from './bolum-testler/bolum-testler.component';
import { TestDetayComponent } from './test-detay/test-detay.component';

const routes: Routes = [
  { path: ':bolum/:id', component: TestDetayComponent },
  { path: ':bolum', component: BolumTestlerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Pages2RoutingModule { }
