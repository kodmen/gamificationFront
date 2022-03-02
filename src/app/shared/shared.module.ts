import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowSendMailComponent } from './signup/showSendMail.component';



@NgModule({
  declarations: [ShowSendMailComponent],
  imports: [
    CommonModule
  ],
  exports:[ShowSendMailComponent]
})
export class SharedModule { }
