import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheServiceComponent } from './recherche-service.component';

describe('RechercheServiceComponent', () => {
  let component: RechercheServiceComponent;
  let fixture: ComponentFixture<RechercheServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
