import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreServiceComponent } from './centre-service.component';

describe('CentreServiceComponent', () => {
  let component: CentreServiceComponent;
  let fixture: ComponentFixture<CentreServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
