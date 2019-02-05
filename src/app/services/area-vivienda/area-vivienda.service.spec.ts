import { TestBed } from '@angular/core/testing';

import { AreaViviendaService } from './area-vivienda.service';

describe('AreaViviendaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreaViviendaService = TestBed.get(AreaViviendaService);
    expect(service).toBeTruthy();
  });
});
