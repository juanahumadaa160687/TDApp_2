import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerblogPage } from './verblog.page';

describe('VerblogPage', () => {
  let component: VerblogPage;
  let fixture: ComponentFixture<VerblogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerblogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
