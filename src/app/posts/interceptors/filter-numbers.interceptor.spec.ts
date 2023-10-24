import { TestBed } from '@angular/core/testing';

import { FilterNumbersInterceptor } from './filter-numbers.interceptor';

describe('FilterNumbersInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      FilterNumbersInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: FilterNumbersInterceptor = TestBed.inject(FilterNumbersInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
