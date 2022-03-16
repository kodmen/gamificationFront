import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowSendMailComponent } from './signup/showSendMail.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [ShowSendMailComponent, FooterComponent,FooterComponent, ProfileComponent],
  imports: [
    CommonModule
  ],
  exports:[ShowSendMailComponent,FooterComponent]
})
export class SharedModule { }
