import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDetayComponent } from './test-detay.component';

describe('TestDetayComponent', () => {
  let component: TestDetayComponent;
  let fixture: ComponentFixture<TestDetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDetayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
