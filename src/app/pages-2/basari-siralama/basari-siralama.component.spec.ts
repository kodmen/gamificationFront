import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasariSiralamaComponent } from './basari-siralama.component';

describe('BasariSiralamaComponent', () => {
  let component: BasariSiralamaComponent;
  let fixture: ComponentFixture<BasariSiralamaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasariSiralamaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasariSiralamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
