import { TestBed } from '@angular/core/testing';

import { MockRoutesService } from './mock-routes.service';

describe('MockRoutesService', () => {
  let service: MockRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
