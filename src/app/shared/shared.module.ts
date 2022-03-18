import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowSendMailComponent } from './signup/showSendMail.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { ProfileComponent } from './profile/profile.component';
import { KayitliDerslerComponent } from './kayitli-dersler/kayitli-dersler.component';
import { TekDersComponent } from '../components/tek-ders/tek-ders.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ShowSendMailComponent, FooterComponent,FooterComponent, ProfileComponent, KayitliDerslerComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  exports:[ShowSendMailComponent,FooterComponent,KayitliDerslerComponent]
})
export class SharedModule { }
