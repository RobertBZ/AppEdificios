import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalHabitacionEditPage } from './modal-habitacion-edit.page';

describe('ModalHabitacionEditPage', () => {
  let component: ModalHabitacionEditPage;
  let fixture: ComponentFixture<ModalHabitacionEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalHabitacionEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalHabitacionEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
