import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterPromSerComponent } from './ajouter-prom-ser.component';

describe('AjouterPromSerComponent', () => {
  let component: AjouterPromSerComponent;
  let fixture: ComponentFixture<AjouterPromSerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterPromSerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterPromSerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
