import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DersAnalizComponent } from './ders-analiz.component';

describe('DersAnalizComponent', () => {
  let component: DersAnalizComponent;
  let fixture: ComponentFixture<DersAnalizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DersAnalizComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DersAnalizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
