import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BolumTestService } from 'src/app/core/services/bolum-test.service';
import { ISoruTest } from 'src/app/entities/soru-test.model';

@Component({
  selector: 'app-test-detay',
  templateUrl: './test-detay.component.html',
  styleUrls: ['./test-detay.component.scss'],
})
export class TestDetayComponent implements OnInit {
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private soruTestService: BolumTestService,
    private fb: FormBuilder
  ) {
    // this.form = this.fb.group({
    //   TestId: [this.test.id, { validators: [Validators.required] }],
    //   cevaplar: this.fb.array([]),
    // });

    // for (let index = 0; index < this.test.soruSayisi; index++) {
    //   this.addControl()
    // }
  }

  soruCevap(): any {
    return this.fb.group({
      cevap: this.fb.control(''),
    });
  }

  get rolesFieldAsFormArray(): any {
    return this.form.get('cevaplar') as FormArray;
  }

  addControl(): void {
    this.rolesFieldAsFormArray.push(this.soruCevap());
  }

  formValue(): void {
    console.log(this.form.value);
  }
  //*************** */

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.getTestById(params['id']);
      } else {
        console.log('geldim hata');
      }
    });
  }

  submit(p: any) {
    console.log(p);
  }

  test?: ISoruTest;
  isLoading = true;
  src?: Blob;

  getTestById(id: number) {
    this.soruTestService.getSorularById(id).subscribe((res) => {
      this.isLoading = false;
      this.test = res;

      this.form = this.fb.group({
        TestId: [this.test.id, { validators: [Validators.required] }],
        cevaplar: this.fb.array([]),
      });
  
      for (let index = 0; index < this.test.soruSayisi; index++) {
        this.addControl()
      }

    });
  }

  getPdfFormat(b: string): string {
    return 'data:application/pdf;base64,' + b;
  }

}
