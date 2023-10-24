import { TestBed } from '@angular/core/testing';

import { ModifyUrlInterceptor } from './modify-url.interceptor';

describe('ModifyUrlInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ModifyUrlInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ModifyUrlInterceptor = TestBed.inject(ModifyUrlInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
