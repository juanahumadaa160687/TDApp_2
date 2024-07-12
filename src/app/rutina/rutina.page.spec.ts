import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RutinaPage } from './rutina.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('RutinaPage', () => {
  let component: RutinaPage;
  let fixture: ComponentFixture<RutinaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SQLite]});
    fixture = TestBed.createComponent(RutinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
