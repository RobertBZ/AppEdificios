import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistroAreaViviendaPage } from './modal-registro-area-vivienda.page';

describe('ModalRegistroAreaViviendaPage', () => {
  let component: ModalRegistroAreaViviendaPage;
  let fixture: ComponentFixture<ModalRegistroAreaViviendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalRegistroAreaViviendaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalRegistroAreaViviendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
