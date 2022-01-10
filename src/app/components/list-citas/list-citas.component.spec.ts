import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCitasComponent } from './list-citas.component';

describe('ListCitasComponent', () => {
  let component: ListCitasComponent;
  let fixture: ComponentFixture<ListCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCitasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
