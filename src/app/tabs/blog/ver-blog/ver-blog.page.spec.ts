import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerBlogPage } from './ver-blog.page';

describe('VerBlogPage', () => {
  let component: VerBlogPage;
  let fixture: ComponentFixture<VerBlogPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
