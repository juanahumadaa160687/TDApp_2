import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SintomasPage } from './sintomas.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { DbAppService } from '../db/db-app.service';

describe('SintomasPage', () => {
  let component: SintomasPage;
  let fixture: ComponentFixture<SintomasPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [SQLite, DbAppService]});
    fixture = TestBed.createComponent(SintomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
