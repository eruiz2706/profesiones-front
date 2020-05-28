import { TestBed } from '@angular/core/testing';

import { ProfesionalRolGuard } from './profesional-rol.guard';

describe('ProfesionalRolGuard', () => {
  let guard: ProfesionalRolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProfesionalRolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
