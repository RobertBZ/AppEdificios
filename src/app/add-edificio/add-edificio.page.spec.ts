import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEdificioPage } from './add-edificio.page';

describe('AddEdificioPage', () => {
  let component: AddEdificioPage;
  let fixture: ComponentFixture<AddEdificioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEdificioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEdificioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
