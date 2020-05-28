import { TestBed } from '@angular/core/testing';

import { ClienteRolGuard } from './cliente-rol.guard';

describe('ClienteRolGuard', () => {
  let guard: ClienteRolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ClienteRolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
