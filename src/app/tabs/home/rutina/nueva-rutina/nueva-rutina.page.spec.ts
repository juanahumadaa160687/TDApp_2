import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaRutinaPage } from './nueva-rutina.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('NuevaRutinaPage', () => {
  let component: NuevaRutinaPage;
  let fixture: ComponentFixture<NuevaRutinaPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [SQLite]});
    fixture = TestBed.createComponent(NuevaRutinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
