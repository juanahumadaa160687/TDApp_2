import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerRutinaPage } from './ver-rutina.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('VerRutinaPage', () => {
  let component: VerRutinaPage;
  let fixture: ComponentFixture<VerRutinaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [SQLite]});
    fixture = TestBed.createComponent(VerRutinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
