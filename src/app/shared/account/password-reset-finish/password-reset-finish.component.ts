import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from 'src/app/core/services/notification.service';
import { PasswordResetFinishService } from './password-reset-finish.service';

@Component({
  selector: 'app-password-reset-finish',
  templateUrl: './password-reset-finish.component.html',
  styleUrls: ['./password-reset-finish.component.scss'],
})
export class PasswordResetFinishComponent implements OnInit, AfterViewInit {
  @ViewChild('newPassword', { static: false })
  newPassword?: ElementRef;

  initialized = false;
  // doNotMatch = false;
  // error = false;
  // success = false;
  key = '';

  fieldTextType: boolean;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  passwordForm = this.fb.group({
    newPassword: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(50)],
    ],
  });

  constructor(
    private passwordResetFinishService: PasswordResetFinishService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private notifcation: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['key']) {
        console.log(params['key']);
        this.key = params['key'];
      }
      this.initialized = true;
    });
  }

  ngAfterViewInit(): void {
    if (this.newPassword) {
      this.newPassword.nativeElement.focus();
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.passwordForm.controls;
  }

  finishReset(): void {
    if (this.passwordForm.invalid) {
      if (this.f.newPassword.errors.required)
        this.notifcation.showError('newPassword is required', ' Try Again ');
      if (this.f.newPassword.errors.minlength)
        this.notifcation.showError(
          'newPassword must be at least 4 characters',
          ' Try Again '
        );
      if (this.f.newPassword.errors.maxlength)
        this.notifcation.showError(
          'newPassword must not exceed 50 characters',
          ' Try Again '
        );
      return;
    }

    const newPassword = this.passwordForm.get(['newPassword'])!.value;

    this.passwordResetFinishService.save(this.key, newPassword).subscribe({
      next: () => (this.notifcation.showSuccess("şifreniz başarı ile yenilendi","tebrikler")),
      error: () => (this.notifcation.showError("bir hata oluştu şifre yenilenemedi","tekrar deneyin")),
    });

    //const newPassword = this.passwordForm.get(['newPassword'])!.value;
   // const confirmPassword = this.passwordForm.get(['confirmPassword'])!.value;

    // if (newPassword !== confirmPassword) {
    //   this.doNotMatch = true;
    // } else {
    //   this.passwordResetFinishService.save(this.key, newPassword).subscribe({
    //     next: () => (this.success = true),
    //     error: () => (this.error = true),
    //   });
    // }
  }
}
