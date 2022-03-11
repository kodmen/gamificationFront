import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolumDetayComponent } from './bolum-detay.component';

describe('BolumDetayComponent', () => {
  let component: BolumDetayComponent;
  let fixture: ComponentFixture<BolumDetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolumDetayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolumDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
