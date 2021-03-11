import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogInCentreComponent } from './log-in-centre.component';

describe('LogInCentreComponent', () => {
  let component: LogInCentreComponent;
  let fixture: ComponentFixture<LogInCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogInCentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
