import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerBlogPage } from './ver-blog.page';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('VerBlogPage', () => {
  let component: VerBlogPage;
  let fixture: ComponentFixture<VerBlogPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [HttpClient, HttpHandler]});
    fixture = TestBed.createComponent(VerBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
