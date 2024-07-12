import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedsPage } from './meds.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('MedsPage', () => {
  let component: MedsPage;
  let fixture: ComponentFixture<MedsPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SQLite]
    });
    fixture = TestBed.createComponent(MedsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
