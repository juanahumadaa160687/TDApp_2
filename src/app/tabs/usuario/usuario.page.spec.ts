import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsuarioPage } from './usuario.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

describe('UsuarioPage', () => {
  let component: UsuarioPage;
  let fixture: ComponentFixture<UsuarioPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [SQLite]});
    fixture = TestBed.createComponent(UsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
