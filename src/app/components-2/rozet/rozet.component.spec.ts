import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RozetComponent } from './rozet.component';

describe('RozetComponent', () => {
  let component: RozetComponent;
  let fixture: ComponentFixture<RozetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RozetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RozetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
