import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesCentresComponent } from './les-centres.component';

describe('LesCentresComponent', () => {
  let component: LesCentresComponent;
  let fixture: ComponentFixture<LesCentresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesCentresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LesCentresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
