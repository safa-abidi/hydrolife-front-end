import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentreProfilComponent } from './centre-profil.component';

describe('CentreProfilComponent', () => {
  let component: CentreProfilComponent;
  let fixture: ComponentFixture<CentreProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentreProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentreProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
