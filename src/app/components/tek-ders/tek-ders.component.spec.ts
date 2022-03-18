import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TekDersComponent } from './tek-ders.component';

describe('TekDersComponent', () => {
  let component: TekDersComponent;
  let fixture: ComponentFixture<TekDersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TekDersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TekDersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
