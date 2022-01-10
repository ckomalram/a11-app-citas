import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarCitasComponent } from './agregar-citas.component';

describe('AgregarCitasComponent', () => {
  let component: AgregarCitasComponent;
  let fixture: ComponentFixture<AgregarCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
