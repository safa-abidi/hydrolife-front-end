import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreGallerieComponent } from './centre-gallerie.component';

describe('CentreGallerieComponent', () => {
  let component: CentreGallerieComponent;
  let fixture: ComponentFixture<CentreGallerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreGallerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreGallerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
