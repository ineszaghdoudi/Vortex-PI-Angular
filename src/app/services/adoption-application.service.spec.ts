import { TestBed } from '@angular/core/testing';

import { AdoptionApplicationService } from './adoption-application.service';

describe('AdoptionApplicationService', () => {
  let service: AdoptionApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdoptionApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
