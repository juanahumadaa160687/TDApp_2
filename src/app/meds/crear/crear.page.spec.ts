import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearPage } from './crear.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('CrearPage', () => {
  let component: CrearPage;
  let fixture: ComponentFixture<CrearPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SQLite]
    });
    fixture = TestBed.createComponent(CrearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
