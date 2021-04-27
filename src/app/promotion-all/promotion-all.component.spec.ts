import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotionAllComponent } from './promotion-all.component';

describe('PromotionAllComponent', () => {
  let component: PromotionAllComponent;
  let fixture: ComponentFixture<PromotionAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromotionAllComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromotionAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
