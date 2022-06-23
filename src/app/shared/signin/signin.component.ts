import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  hata = false;
  submitted = false;

  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private notifcation: NotificationService
  ) {
    this.signinForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(20),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(40),
        ],
      ],
    });
  }

  ngOnInit() {}

  get f(): { [key: string]: AbstractControl } {
    return this.signinForm.controls;
  }

  loginUser() {
    this.submitted = true;

    if (this.signinForm.status == 'INVALID') {
      if (this.f.username.status == 'INVALID') {
        if (this.f.username.errors.required) {
          this.notifcation.showError(
            'kullanıcı adı girmek zorunlu',
            'Tekrar deneyin'
          );
        }
        if (this.f.username.errors.minlength) {
          this.notifcation.showError(
            'kullanıcı adı 6 ten az olamaz',
            'Tekrar deneyin'
          );
        }
        if (this.f.username.errors.maxlength) {
          this.notifcation.showError(
            'kullanıcı adı 20 ten fazla olamaz',
            'Tekrar deneyin'
          );
        }
      }

      if (this.f.password.status == 'INVALID') {
        if (this.f.password.errors.required) {
          this.notifcation.showError('Şifre girmek zorunlu', 'Tekrar deneyin');
        }
        if (this.f.password.errors.minlength) {
          this.notifcation.showError(
            'şifre karakter sayısı 6 ten az olamaz',
            'Tekrar deneyin'
          );
        }
        if (this.f.password.errors.maxlength) {
          this.notifcation.showError(
            'şifre karakter sayısı 40 ten fazla olamaz',
            'Tekrar deneyin'
          );
        }
      }
    } else {
      const user = {
        username: this.signinForm.value.username.trim(),
        password: this.signinForm.value.password.trim(),
      };
      this.authService.signIn(user).subscribe(
        (res) => {
          localStorage.setItem('access_token', res.id_token);
          this.router.navigate(['profil']);
        },
        (err) => {
          this.notifcation.showError(
            'Yanlış kullanıcı adı yada şifre girdiniz',
            'Tekrar deneyin'
          );
          this.hata = true;
        }
      );
    }


  }

}
