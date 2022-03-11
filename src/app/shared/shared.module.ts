import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowSendMailComponent } from './signup/showSendMail.component';
import { FooterComponent } from './layouts/footer/footer.component';



@NgModule({
  declarations: [ShowSendMailComponent, FooterComponent,FooterComponent],
  imports: [
    CommonModule
  ],
  exports:[ShowSendMailComponent,FooterComponent]
})
export class SharedModule { }
