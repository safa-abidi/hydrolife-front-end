import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClientProfilComponent } from './update-client-profil.component';

describe('UpdateClientProfilComponent', () => {
  let component: UpdateClientProfilComponent;
  let fixture: ComponentFixture<UpdateClientProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateClientProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateClientProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
