import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterServiceComponent } from './ajouter-service.component';

describe('AjouterServiceComponent', () => {
  let component: AjouterServiceComponent;
  let fixture: ComponentFixture<AjouterServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
