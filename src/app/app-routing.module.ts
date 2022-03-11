import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DerslerComponent } from './dersler/dersler.component';
import { BolumDetayComponent } from './pages/bolum-detay/bolum-detay.component';
import { DersDetailComponent } from './pages/ders-detail/ders-detail.component';
import { AccountActiveComponent } from './shared/account-active/account-active.component';
import { PasswordResetFinishComponent } from './shared/account/password-reset-finish/password-reset-finish.component';
import { PasswordResetInitComponent } from './shared/account/password-reset-init/password-reset-init.component';
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SigninComponent } from './shared/signin/signin.component';
import { ShowSendMailComponent } from './shared/signup/showSendMail.component';
import { SignupComponent } from './shared/signup/signup.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'sifre-unuttum', component: PasswordResetInitComponent },
  { path: 'yeni-sifre/:key', component: PasswordResetFinishComponent },
  { path: 'account/:key', component: AccountActiveComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sendMail', component: ShowSendMailComponent },
  { path: 'dersler', component: DerslerComponent },
  { path: 'ders-detay/:id', component: DersDetailComponent },
  { path: 'ders-detay/konu/:id', component: BolumDetayComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
