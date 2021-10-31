import { TestBed } from '@angular/core/testing';

import { ApiHakanService } from './api-hakan.service';

describe('ApiHakanService', () => {
  let service: ApiHakanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiHakanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
