import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealtyBarComponent } from './healty-bar.component';

describe('HealtyBarComponent', () => {
  let component: HealtyBarComponent;
  let fixture: ComponentFixture<HealtyBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealtyBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealtyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
