import { TestBed } from '@angular/core/testing';

import { OrelistService } from './orelist.service';

describe('OrelistService', () => {
  let service: OrelistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrelistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
