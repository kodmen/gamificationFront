import { HttpResponse } from '@angular/common/http';
import { Component, OnInit, ElementRef } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { finalize, Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { AccountService } from 'src/app/core/services/account.service';
import {
  DataUtilService,
  FileLoadError,
} from 'src/app/core/services/data-util.service';
import { ImageModelService } from 'src/app/core/services/image-model.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { OgrenciService } from 'src/app/core/services/ogrenci.service';
import { Account } from 'src/app/entities/account.model';
import { IImageModel, ImageModel } from 'src/app/entities/image-model.model';
import { Ogrenci } from 'src/app/entities/ogrenci.model';
import { PasswordChange } from 'src/app/entities/passwordChange.model';
import { IUser } from 'src/app/entities/user-management';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(
    protected authService: AuthService,
    protected ogrenciService: OgrenciService,
    protected fb: FormBuilder,
    protected imageModelService: ImageModelService,
    protected dataUtils: DataUtilService,
    protected alertService: NotificationService,
    protected elementRef: ElementRef,
    protected accountService: AccountService
  ) {
    this.getOgrenci();
  }

  user?: IUser;
  ogrenci?: Ogrenci;
  ogrenciUser?: Account;
  settingsForm: FormGroup;
  editForm: FormGroup;

  account!: Account;
  success = false;
  languages = 'en';


  isSaving = false;
  imgName?: string;

  ngOnInit(): void {
 
  }

  //öğrenci getir
  getOgrenci() {
    this.ogrenciService.getOgrenci().subscribe((res) => {
      this.ogrenci = res;
   
      this.account = this.ogrenci.studentUser;
      this.settingsForm = this.fb.group({
        login: [
          this.ogrenci.studentUser.login,
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(50),
          ],
        ],
        firstName: [
          this.ogrenci.studentUser.firstName,
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(50),
          ],
        ],
        lastName: [
          this.ogrenci.studentUser.lastName,
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(50),
          ],
        ],
        email: [
          this.ogrenci.studentUser.email,
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(254),
            Validators.email,
          ],
        ],
        imageUrl: [
          this.ogrenci.studentUser.imageUrl,
          [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(50),
          ],
        ],
        bio: [
          this.ogrenci.aciklama,
          [
            Validators.maxLength(250),
          ],
        ],
        langKey: [this.ogrenci.studentUser.langKey],
      });

      this.editForm = this.fb.group({
        id: [],
        name: [],
        type: [],
        img: ['', [Validators.required]],
        imgContentType: [],
      });
    });
  }

  getUser() {
    this.authService.getUserProfile().subscribe((res) => {
      this.user = res;
    });
  }

  //+++++++++++++++++

  /**
   * form submit hesabp bilgileri kayıt edme
   */
  saveAccount(): void {
    this.success = false;

    this.account.email = this.settingsForm.get('email')!.value;
    this.account.firstName = this.settingsForm.get('firstName')!.value;
    this.account.lastName = this.settingsForm.get('lastName')!.value;
    this.account.langKey = this.settingsForm.get('langKey')!.value;
    this.account.imageUrl = this.settingsForm.get('imageUrl')!.value;

    if(this.settingsForm.get('imageUrl')!.value){
      console.log("aciklama ",this.settingsForm.get('imageUrl')!.value);
      console.log("ogr id",this.ogrenci.id);
      
      this.ogrenciBioUpdate();
    }

    this.accountService.save(this.account).subscribe(
      (res) => {
        this.success = true;
        this.alertService.showSuccess('bilgiler kaydedildi', 'başarılı');
      },
      (err) => {
        console.log('accautn servis gönderilemedi');
      }
    );
  }

  ogrenciBioUpdate(){
    this.ogrenci.aciklama = this.settingsForm.get('bio')!.value;

    this.ogrenciService.partialUpdate(this.ogrenci).subscribe(res=>{
      this.alertService.showSuccess("org bio güncellendi","başarılı");
    },err=>{
      this.alertService.showError("başarısız acıklama güncellenemedi","Error");
    })
  }

  //+++++++++++++++++


  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    this.dataUtils.openFile(base64String, contentType);
  }

  setFileData(event: Event, field: string, isImage: boolean): void {
    this.dataUtils
      .loadFileToForm(event, this.editForm, field, isImage)
      .subscribe({
        error: (err: FileLoadError) =>
          this.alertService.showError('gamificationApp.error', ''),
      });
  }

  clearInputImage(
    field: string,
    fieldContentType: string,
    idInput: string
  ): void {
    this.editForm.patchValue({
      [field]: null,
      [fieldContentType]: null,
    });
    if (idInput && this.elementRef.nativeElement.querySelector('#' + idInput)) {
      this.elementRef.nativeElement.querySelector('#' + idInput).value = null;
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.editForm.controls;
  }

  save(): void {
    if (this.editForm.invalid) {
      if (this.f.img.errors.required) {
        this.alertService.showError('lütfren resim giriniz', 'kaydedilemedi');
      }
      return;
    }

    this.isSaving = true;
    const imageModel = this.createFromForm();

    this.subscribeToSaveResponse(this.imageModelService.create(imageModel));

    // if (imageModel.id !== undefined) {
    //   this.subscribeToSaveResponse(this.imageModelService.update(imageModel));
    // } else {

    // }
  }

  protected subscribeToSaveResponse(
    result: Observable<HttpResponse<IImageModel>>
  ): void {
    result.pipe(finalize(() => this.onSaveFinalize())).subscribe({
      next: (res) => {
        this.imgName = res.body.name;
        this.settingsForm.get('imageUrl').setValue(this.imgName);

        this.saveAccount();
        this.editForm.get('img').setValue('');
      },
      error: () => this.onSaveError(),
    });
  }

  protected onSaveError(): void {
    this.alertService.showError("servis hatası güneclleme başarısız","Başarısız")
  }

  protected onSaveFinalize(): void {
    this.isSaving = false;
  }

  protected updateForm(imageModel: IImageModel): void {
    this.editForm.patchValue({
      id: imageModel.id,
      name: imageModel.name,
      type: imageModel.type,
      img: imageModel.img,
      imgContentType: imageModel.imgContentType,
    });
  }

  protected createFromForm(): IImageModel {
    return {
      ...new ImageModel(),
      id: this.editForm.get(['id'])!.value,
      name: this.editForm.get(['name'])!.value,
      type: this.editForm.get(['type'])!.value,
      imgContentType: this.editForm.get(['imgContentType'])!.value,
      img: this.editForm.get(['img'])!.value,
    };
  }

  //++++++++++++++++++++

  chanceForm=this.fb.group({
    currentPassword: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ],
    ],
    newPassword: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ],
    ],
    newPasswordConfirm: [
      '',
      [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ],
    ],
  });

  chancePassSave(){    
    if (this.chanceForm.invalid) {
      if (this.chanceForm.controls.currentPassword.errors.required) {
        this.alertService.showError('şuanki şifreni giriniz', 'işlem başarısız');
      }
      if (this.chanceForm.controls.currentPassword.errors.minLength) {
        this.alertService.showError('şuanki şifreni giriniz', 'işlem başarısız');
      }
      if (this.chanceForm.controls.currentPassword.errors.maxLength) {
        this.alertService.showError('şuanki şifreni giriniz', 'işlem başarısız');
      }
      return;
    }

    if(!(this.chanceForm.get("newPassword").value ==this.chanceForm.get("newPasswordConfirm").value )){
      this.alertService.showError('yeni şifreniz ile kontrol şifre birbiri ile uyuşmuyor', 'işlem başarısız');
      return;
    }

    this.authService.changePassword(new PasswordChange(this.chanceForm.get("currentPassword").value,this.chanceForm.get("newPassword").value)).subscribe(res=>{
      this.alertService.showSuccess("şifreniz güncellendi","işlem başarılı");
    },err=>{
      this.alertService.showError("hata şifreniz yanlış","Başarısız")
    })
  }
}
