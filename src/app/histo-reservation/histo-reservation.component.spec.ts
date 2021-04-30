import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoReservationComponent } from './histo-reservation.component';

describe('HistoReservationComponent', () => {
  let component: HistoReservationComponent;
  let fixture: ComponentFixture<HistoReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoReservationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
