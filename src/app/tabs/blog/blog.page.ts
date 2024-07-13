import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  blog: any = [];

  constructor( private api: ApiRestService) { }

  ionViewWillEnter() {
    this.traerPosts();
  }

  ngOnInit() {
  }

  traerPosts() {
    this.api.getPosts().subscribe((data) => {
      this.blog = data.posts;
  })
}

}
