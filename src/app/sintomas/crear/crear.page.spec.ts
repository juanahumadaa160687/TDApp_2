import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearPage } from './crear.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { DbAppService } from 'src/app/db/db-app.service';

describe('CrearPage', () => {
  let component: CrearPage;
  let fixture: ComponentFixture<CrearPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [SQLite, DbAppService]});
    fixture = TestBed.createComponent(CrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
