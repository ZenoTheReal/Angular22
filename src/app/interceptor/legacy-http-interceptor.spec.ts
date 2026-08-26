import { TestBed } from '@angular/core/testing';

import { LegacyHttpInterceptor } from './legacy-http-interceptor';

describe('LegacyHttpInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [LegacyHttpInterceptor],
    }),
  );

  it('should be created', () => {
    const interceptor: LegacyHttpInterceptor = TestBed.inject(LegacyHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
