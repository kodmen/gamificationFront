import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import Validation from '../utils/validation';
import { NotificationService } from 'src/app/core/services/notification.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    public fb: FormBuilder,
    public authService: AuthService,
    public router: Router,
    private notifcation: NotificationService
  ) {}

  fieldTextType: boolean;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
    });
  }
  form: FormGroup;
  submitted = false;

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.status == "INVALID") {

      if(this.f.email.status=="INVALID"){
        if (this.f.email.errors.required){
          this.notifcation.showError('mail girmek zorunlu', 'Tekrar deneyin');
        }
        if (this.f.email.errors.email){
          this.notifcation.showError('mail formatı yanlış', 'Tekrar deneyin');
        }

      }

      if(this.f.username.status=="INVALID"){
        if (this.f.username.errors.required){
          this.notifcation.showError('kullanıcı adı girmek zorunlu', 'Tekrar deneyin');
        }
        if (this.f.username.errors.minlength){
          this.notifcation.showError('kullanıcı adı 6 ten az olamaz', 'Tekrar deneyin');
        }
        if (this.f.username.errors.maxlength){
          this.notifcation.showError('kullanıcı adı 20 ten fazla olamaz', 'Tekrar deneyin');
        }
      }

      if(this.f.password.status=="INVALID"){
        if (this.f.password.errors.required){
          this.notifcation.showError('Şifre girmek zorunlu', 'Tekrar deneyin');
        }
        if (this.f.password.errors.minlength){
          this.notifcation.showError('şifre karakter sayısı 6 ten az olamaz', 'Tekrar deneyin');
        }
        if (this.f.password.errors.maxlength){
          this.notifcation.showError('şifre karakter sayısı 40 ten fazla olamaz', 'Tekrar deneyin');
        }
      }

      return;
    } else {
      let userModel = Object.assign({}, this.form.value);
      const login = userModel.username.trim();
      const email = userModel.email.trim();
      const password = userModel.password.trim();
      const langKey = 'en';

      this.authService.signUp({ login, email, password, langKey }).subscribe(
        (res) => {

          this.router.navigate(['/sendMail']);
        },
        (err) => {
          console.log(err)
          this.notifcation.showError(
            'Hata oluştu',
            ' Try Again '
          );
        }
      );

    }
  }
}
