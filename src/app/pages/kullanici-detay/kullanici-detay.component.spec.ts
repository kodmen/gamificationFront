import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KullaniciDetayComponent } from './kullanici-detay.component';

describe('KullaniciDetayComponent', () => {
  let component: KullaniciDetayComponent;
  let fixture: ComponentFixture<KullaniciDetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KullaniciDetayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KullaniciDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
