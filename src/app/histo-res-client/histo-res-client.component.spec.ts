import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoResClientComponent } from './histo-res-client.component';

describe('HistoResClientComponent', () => {
  let component: HistoResClientComponent;
  let fixture: ComponentFixture<HistoResClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoResClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoResClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
