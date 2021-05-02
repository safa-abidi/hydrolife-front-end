import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankUPageComponent } from './thank-upage.component';

describe('ThankUPageComponent', () => {
  let component: ThankUPageComponent;
  let fixture: ComponentFixture<ThankUPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankUPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankUPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
