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
    if (this.signinForm.invalid) {
      if (this.f.username.errors.required)
        this.notifcation.showError('Username is required', ' Try Again ');
      if (this.f.username.errors.minlength)
        this.notifcation.showError(
          'Username must be at least 6 characters',
          ' Try Again '
        );
      if (this.f.username.errors.maxlength)
        this.notifcation.showError(
          'Username must not exceed 40 characters',
          ' Try Again '
        );

      if (this.f.password.errors.required)
        this.notifcation.showError('Password is required', ' Try Again ');
      if (this.f.password.errors.minlength)
        this.notifcation.showError(
          ' Password must be at least 6 characters',
          ' Try Again '
        );
      if (this.f.password.errors.maxlength)
        this.notifcation.showError(
          'Password must not exceed 40 characters',
          ' Try Again '
        );

      return;
    }

    this.authService.signIn(this.signinForm.value).subscribe(
      (res) => {
        localStorage.setItem('access_token', res.id_token);
        this.router.navigate(['home']);
        //this.notifcation.showSuccess("tebrikler")
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

  // goToSignIn(){
  //   this.router.navigate(['sign-up']);
  // }
}
