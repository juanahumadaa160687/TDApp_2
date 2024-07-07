import { TestBed } from '@angular/core/testing';

import { DbAppService } from './db-app.service';

describe('DbAppService', () => {
  let service: DbAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
