import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { TestQuizComponent } from './test-quiz/test-quiz.component';



@NgModule({
  declarations: [
    LoadingComponent,
    TestQuizComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    LoadingComponent,
    TestQuizComponent
  ]
})
export class Components2Module { }
