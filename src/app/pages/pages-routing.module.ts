import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DersDetailComponent } from './ders-detail/ders-detail.component';

const routes: Routes = [
  {path:"",component:DersDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class PagesRoutingModule { }
