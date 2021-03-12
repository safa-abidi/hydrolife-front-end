import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceCentreComponent } from './espace-centre.component';

describe('EspaceCentreComponent', () => {
  let component: EspaceCentreComponent;
  let fixture: ComponentFixture<EspaceCentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceCentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
