import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoPage } from './todo.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { DbAppService } from '../db/db-app.service';

describe('TodoPage', () => {
  let component: TodoPage;
  let fixture: ComponentFixture<TodoPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [SQLite, DbAppService]});
    fixture = TestBed.createComponent(TodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
