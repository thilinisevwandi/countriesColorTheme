import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMoreDetailComponent } from './app-more-detail.component';

describe('AppMoreDetailComponent', () => {
  let component: AppMoreDetailComponent;
  let fixture: ComponentFixture<AppMoreDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppMoreDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMoreDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
