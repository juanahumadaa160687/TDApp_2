import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EliminarRutinaPage } from './eliminar-rutina.page';

describe('EliminarRutinaPage', () => {
  let component: EliminarRutinaPage;
  let fixture: ComponentFixture<EliminarRutinaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarRutinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
