import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterGallerieComponent } from './ajouter-gallerie.component';

describe('AjouterGallerieComponent', () => {
  let component: AjouterGallerieComponent;
  let fixture: ComponentFixture<AjouterGallerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterGallerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterGallerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
