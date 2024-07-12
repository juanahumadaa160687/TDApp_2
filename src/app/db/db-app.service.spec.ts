import { TestBed } from '@angular/core/testing';

import { DbAppService } from './db-app.service';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('DbAppService', () => {
  let service: DbAppService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [SQLite, DbAppService]
    });
    service = TestBed.inject(DbAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
