import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHistoComponent } from './search-histo.component';

describe('SearchHistoComponent', () => {
  let component: SearchHistoComponent;
  let fixture: ComponentFixture<SearchHistoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHistoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
