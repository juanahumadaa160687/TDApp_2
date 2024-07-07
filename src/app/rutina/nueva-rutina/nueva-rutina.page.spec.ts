import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaRutinaPage } from './nueva-rutina.page';

describe('NuevaRutinaPage', () => {
  let component: NuevaRutinaPage;
  let fixture: ComponentFixture<NuevaRutinaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaRutinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
