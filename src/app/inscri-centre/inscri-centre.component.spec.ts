import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriCentreComponent } from './inscri-centre.component';

describe('InscriCentreComponent', () => {
  let component: InscriCentreComponent;
  let fixture: ComponentFixture<InscriCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriCentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
