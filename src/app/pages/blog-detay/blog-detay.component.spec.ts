import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogDetayComponent } from './blog-detay.component';

describe('BlogDetayComponent', () => {
  let component: BlogDetayComponent;
  let fixture: ComponentFixture<BlogDetayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogDetayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
