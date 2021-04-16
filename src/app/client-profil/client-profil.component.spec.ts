import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientProfilComponent } from './client-profil.component';

describe('ClientProfilComponent', () => {
  let component: ClientProfilComponent;
  let fixture: ComponentFixture<ClientProfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientProfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
