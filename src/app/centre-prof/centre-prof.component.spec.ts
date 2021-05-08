import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreProfComponent } from './centre-prof.component';

describe('CentreProfComponent', () => {
  let component: CentreProfComponent;
  let fixture: ComponentFixture<CentreProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
