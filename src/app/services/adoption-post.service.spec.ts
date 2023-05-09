import { TestBed } from '@angular/core/testing';

import { AdoptionPostService } from './adoption-post.service';

describe('AdoptionPostService', () => {
  let service: AdoptionPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdoptionPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
