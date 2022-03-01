import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PasswordInitServiceService } from './password-init-service.service';

@Component({
  selector: 'app-password-reset-init',
  templateUrl: './password-reset-init.component.html',
  styleUrls: ['./password-reset-init.component.scss'],
})
export class PasswordResetInitComponent implements AfterViewInit {
  @ViewChild('email', { static: false })
  email?: ElementRef;

  success = false;
  resetRequestForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(254),
        Validators.email,
      ],
    ],
  });

  constructor(
    private passwordResetInitService: PasswordInitServiceService,
    private fb: FormBuilder,
    private notifcation: NotificationService
  ) {}

  ngAfterViewInit(): void {
    if (this.email) {
      this.email.nativeElement.focus();
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.resetRequestForm.controls;
  }

  requestReset(): void {
    if (this.resetRequestForm.invalid) {
      if (this.f.email.errors.required)
        this.notifcation.showError('email is required', ' Try Again ');

      if (this.f.email.errors.email)
        this.notifcation.showError(
          'maili yanlış formatta girdiniz',
          ' Try Again '
        );

      if (this.f.email.errors.minlength)
        this.notifcation.showError(
          'email must be at least 6 characters',
          ' Try Again '
        );

      if (this.f.email.errors.maxlength)
        this.notifcation.showError(
          'email must not exceed 40 characters',
          ' Try Again '
        );

      return;
    }

    this.passwordResetInitService
      .save(this.resetRequestForm.get(['email'])!.value)
      .subscribe(() => (this.success = true),err=>{
        this.notifcation.showError(
          'server hatası',
          ' Try Again '
        );
      });
  }
}
