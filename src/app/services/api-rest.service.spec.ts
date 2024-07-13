import { TestBed } from '@angular/core/testing';

import { ApiRestService } from './api-rest.service';
import { HttpClient } from '@angular/common/http';

describe('ApiRestService', () => {
  let service: ApiRestService;

  beforeEach(() => {
    service = TestBed.inject(ApiRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
