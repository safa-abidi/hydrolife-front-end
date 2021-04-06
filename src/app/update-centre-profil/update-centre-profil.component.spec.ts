import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCentreProfilComponent } from './update-centre-profil.component';

describe('UpdateCentreProfilComponent', () => {
  let component: UpdateCentreProfilComponent;
  let fixture: ComponentFixture<UpdateCentreProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCentreProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCentreProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
