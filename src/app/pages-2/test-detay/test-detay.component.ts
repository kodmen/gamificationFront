import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BolumTestService } from 'src/app/core/services/bolum-test.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import {
  cevaplar,
  IResultsOfExam,
  ResultsOfExam,
} from 'src/app/entities/resultsOfExam.model';
import { ISoruTest } from 'src/app/entities/soru-test.model';
import { TestAnswer } from 'src/app/entities/testAnswer.model';

@Component({
  selector: 'app-test-detay',
  templateUrl: './test-detay.component.html',
  styleUrls: ['./test-detay.component.scss'],
})
export class TestDetayComponent implements OnInit {
  form: FormGroup;
  formGelenCevaplar?: FormGroup;

  examResult?: ResultsOfExam;
  resultIsLoading = true;
  sinavSonuc = false;

  test?: ISoruTest;
  isLoading = true;
  src?: Blob;

  constructor(
    private route: ActivatedRoute,
    private soruTestService: BolumTestService,
    private fb: FormBuilder,
    private notification: NotificationService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.getTestById(params['id']);
      } else {
        console.log('parametre olarak id gelmedi init-funcksion');
      }
    });
  }

  getTestById(id: number) {
    this.soruTestService.getSorularById(id).subscribe((res) => {
      this.isLoading = false;
      this.test = res;

      this.form = this.fb.group({
        testId: [this.test.id, { validators: [Validators.required] }],
        answers: this.fb.array([]),
      });

      for (let index = 0; index < this.test.soruSayisi; index++) {
        this.addControl();
      }
    });
  }

  /**
   * sorulara yönelik cevapdoldurma form işlemleri
   */

  soruCevap(): any {
    return this.fb.group({
      answer: this.fb.control(''),
    });
  }

  get cevaplarFieldAsFormArray(): any {
    return this.form.get('answers') as FormArray;
  }

  addControl(): void {
    this.cevaplarFieldAsFormArray.push(this.soruCevap());
  }

  formValue(): void {
    var answer = this.formToModel(this.form.value);

    this.soruTestService.cevapKontrol(answer).subscribe(
      (res) => {
        this.examResult = res;

        this.cevaplaraGoreFormOlustur();
        this.resultIsLoading = false;
        this.sinavSonuc = true;
      },
      (err) => {
        this.notification.showError(err.error.title, 'hata');
        console.log(err.error.title);
        console.log('cevap gönderilemedi ');
      }
    );
  }

  formToModel(cevap: any): TestAnswer {
    var testAnswer = new TestAnswer();

    const { testId, answers } = JSON.parse(JSON.stringify(cevap));
    testAnswer.testId = testId;
    testAnswer.answers = new Array();

    answers.forEach((ans) => {
      const { answer } = JSON.parse(JSON.stringify(ans));
      testAnswer.answers.push(answer);
    });
    return testAnswer;
  }

  /********* */

  //pdf format getir blob değer
  getPdfFormat(b: string): string {
    return 'data:application/pdf;base64,' + b;
  }

  //net hesapla
  getNet(): number {
    var yanlisNet = this.examResult.countOfWrong / 3;
    return this.examResult.countOfCorrect - yanlisNet;
  }

  // başarı yüzdesi haspla
  getSussecsRate() {
    return (this.examResult.countOfCorrect * 100) / this.test.soruSayisi;
  }

  /****
   * gelen cevap işlemleri
   *
   */


  addControlCevap(cevap: string): void {
    this.resultFieldAsFormArray.push(this.soruCevapAddCevap(cevap));
  }

  get resultFieldAsFormArray(): any {
    return this.formGelenCevaplar.get('answers') as FormArray;
  }

  soruCevapAddCevap(cevap: string): any {
    return this.fb.group({
      answer: this.fb.control(cevap),
    });
  }

  cevaplaraGoreFormOlustur() {
    var answer = this.formToModel(this.form.value);

    this.formGelenCevaplar = this.fb.group({
      testId: [this.test.id, { validators: [Validators.required] }],
      answers: this.fb.array([]),
    });

    for (let index = 0; index < this.test.soruSayisi; index++) {
      console.log('ansver den gelen cevaplar ', answer.answers[index]);

      this.addControlCevap(answer.answers[index]);
    }
  }

  getBorderOfResult(id: number): string {
    if (this.examResult.result[id].toString() == 'dogru') {
      return ' bg-success';
    } else if (this.examResult.result[id].toString() == 'yanlis') {
      return ' bg-danger';
    } else if (this.examResult.result[id].toString() == 'bos') {
      return ' bg-secondary';
    }
    return 'border border-info border-5';
  }
}
