import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KayitliDerslerComponent } from './kayitli-dersler.component';

describe('KayitliDerslerComponent', () => {
  let component: KayitliDerslerComponent;
  let fixture: ComponentFixture<KayitliDerslerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KayitliDerslerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KayitliDerslerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
