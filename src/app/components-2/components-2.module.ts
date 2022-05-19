import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { TestQuizComponent } from './test-quiz/test-quiz.component';
import { RozetComponent } from './rozet/rozet.component';
import {MatTooltipModule} from '@angular/material/tooltip';



@NgModule({
  declarations: [
    LoadingComponent,
    TestQuizComponent,
    RozetComponent
  ],
  imports: [
    CommonModule,MatTooltipModule
  ],
  exports:[
    LoadingComponent,
    TestQuizComponent,RozetComponent
  ]
})
export class Components2Module { }
