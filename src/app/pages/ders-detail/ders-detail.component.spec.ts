import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DersDetailComponent } from './ders-detail.component';

describe('DersDetailComponent', () => {
  let component: DersDetailComponent;
  let fixture: ComponentFixture<DersDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DersDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
