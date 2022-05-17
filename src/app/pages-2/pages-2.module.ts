import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Pages2RoutingModule } from './pages-2-routing.module';
import { BolumTestlerComponent } from './bolum-testler/bolum-testler.component';
import { Components2Module } from '../components-2/components-2.module';
import { TestDetayComponent } from './test-detay/test-detay.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ReactiveFormsModule } from '@angular/forms';
import { BasariSiralamaComponent } from './basari-siralama/basari-siralama.component';
import { DuelloComponent } from './duello/duello.component';


@NgModule({
  declarations: [
    BolumTestlerComponent,
    TestDetayComponent,
    BasariSiralamaComponent,
    DuelloComponent,
  ],
  imports: [
    CommonModule,
    Pages2RoutingModule,
    Components2Module,
    NgxExtendedPdfViewerModule,
    PdfViewerModule,
    ReactiveFormsModule
  ]
})
export class Pages2Module { }
