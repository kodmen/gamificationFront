import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading/loading.component';
import { TestQuizComponent } from './test-quiz/test-quiz.component';
import { RozetComponent } from './rozet/rozet.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HealtyBarComponent } from './healty-bar/healty-bar.component';

@NgModule({
  declarations: [
    LoadingComponent,
    TestQuizComponent,
    RozetComponent,
    HealtyBarComponent,
  ],
  imports: [CommonModule, MatTooltipModule],
  exports: [LoadingComponent, TestQuizComponent, RozetComponent,HealtyBarComponent],
})
export class Components2Module {}
