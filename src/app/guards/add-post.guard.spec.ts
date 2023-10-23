import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';

import { addPostGuard } from './add-post.guard';

describe('addPostGuard', () => {
  const executeGuard: CanDeactivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => addPostGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
