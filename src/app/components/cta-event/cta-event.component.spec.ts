import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaEventComponent } from './cta-event.component';

describe('CtaEventComponent', () => {
  let component: CtaEventComponent;
  let fixture: ComponentFixture<CtaEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CtaEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
