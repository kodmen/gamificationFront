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

    if (this.form.invalid) {
      if (this.f.email.errors.email)
        this.notifcation.showError(
          'maili yanlış formatta girdiniz',
          ' Try Again '
        );
      if (this.f.email.errors.required)
        this.notifcation.showError('mail is required', ' Try Again ');

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
    } else {
      console.log(JSON.stringify(this.form.value, null, 2));
      let userModel = Object.assign({}, this.form.value);
      const login = userModel.username;
      const email = userModel.email;
      const password = userModel.password;
      const langKey = 'en';

      this.authService.signUp({ login, email, password, langKey }).subscribe(
        (res) => {
          //this.form.reset();

          this.router.navigate(['/sendMail']);
        },
        (err) => {
          console.log('error hata');
          console.log(err);
          // burda errora göre hata fırlat
          this.notifcation.showError(
            'Hata oluştu',
            ' Try Again '
          );
        }
      );
    }
  }
}
