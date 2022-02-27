import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS,HttpClientJsonpModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { AuthInterceptor } from './auth/authconfig.interceptor';
import { SigninComponent } from './shared/signin/signin.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { SignupComponent } from './shared/signup/signup.component';
import { AccountActiveComponent } from './shared/account-active/account-active.component';
import { PasswordResetInitComponent } from './shared/account/password-reset-init/password-reset-init.component';
import { PasswordResetFinishComponent } from './shared/account/password-reset-finish/password-reset-finish.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HeaderComponent,
    SignupComponent,
    AccountActiveComponent,
    PasswordResetInitComponent,
    PasswordResetFinishComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
