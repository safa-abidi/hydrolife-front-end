import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuDialogComponent } from './secu-dialog.component';

describe('SecuDialogComponent', () => {
  let component: SecuDialogComponent;
  let fixture: ComponentFixture<SecuDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
