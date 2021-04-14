import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriClientComponent } from './inscri-client.component';

describe('InscriClientComponent', () => {
  let component: InscriClientComponent;
  let fixture: ComponentFixture<InscriClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
