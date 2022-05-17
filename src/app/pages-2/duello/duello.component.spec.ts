import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuelloComponent } from './duello.component';

describe('DuelloComponent', () => {
  let component: DuelloComponent;
  let fixture: ComponentFixture<DuelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuelloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
