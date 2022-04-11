import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { BlogComponent } from './blog/blog.component';
import { DerslerComponent } from './dersler/dersler.component';
import { BasariSiralamaComponent } from './pages-2/basari-siralama/basari-siralama.component';
import { BlogDetayComponent } from './pages/blog-detay/blog-detay.component';
import { BolumDetayComponent } from './pages/bolum-detay/bolum-detay.component';
import { DersAnalizComponent } from './pages/ders-analiz/ders-analiz.component';
import { DersDetailComponent } from './pages/ders-detail/ders-detail.component';
import { HakkimizdaComponent } from './pages/hakkimizda/hakkimizda.component';
import { IletisimComponent } from './pages/iletisim/iletisim.component';
import { KullaniciDetayComponent } from './pages/kullanici-detay/kullanici-detay.component';
import { AccountActiveComponent } from './shared/account-active/account-active.component';
import { PasswordResetFinishComponent } from './shared/account/password-reset-finish/password-reset-finish.component';
import { PasswordResetInitComponent } from './shared/account/password-reset-init/password-reset-init.component';
import { HomeComponent } from './shared/home/home.component';
import { KayitliDerslerComponent } from './shared/kayitli-dersler/kayitli-dersler.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProfileComponent } from './shared/profile/profile.component';
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
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogDetayComponent },
  { path: 'hakkimizda', component: HakkimizdaComponent },
  { path: 'iletisim', component: IletisimComponent },
  { path: 'siralama', component: BasariSiralamaComponent },

  { // lazy load the blog component
    path: 'testler',
    loadChildren: () =>
      import('./pages-2/pages-2.module').then((m) => m.Pages2Module),canActivate: [AuthGuard]
  },
  { path: 'profil-ayarlar', component: ProfileComponent , canActivate: [AuthGuard]},
  { path: 'profil', component: KullaniciDetayComponent , canActivate: [AuthGuard]},
  { path: 'kayitli-dersler', component: KayitliDerslerComponent , canActivate: [AuthGuard]},
  { path: 'ders-analiz/:id', component: DersAnalizComponent , canActivate: [AuthGuard]},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
