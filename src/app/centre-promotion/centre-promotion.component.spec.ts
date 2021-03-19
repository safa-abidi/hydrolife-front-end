import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentrePromotionComponent } from './centre-promotion.component';

describe('CentrePromotionComponent', () => {
  let component: CentrePromotionComponent;
  let fixture: ComponentFixture<CentrePromotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentrePromotionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentrePromotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
