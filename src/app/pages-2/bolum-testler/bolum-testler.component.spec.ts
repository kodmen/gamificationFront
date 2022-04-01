import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolumTestlerComponent } from './bolum-testler.component';

describe('BolumTestlerComponent', () => {
  let component: BolumTestlerComponent;
  let fixture: ComponentFixture<BolumTestlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolumTestlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BolumTestlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
