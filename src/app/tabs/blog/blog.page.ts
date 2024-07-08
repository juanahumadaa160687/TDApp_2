import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  image: string = '';
  title: string = '';
  author: string = '';

  constructor( private api: ApiRestService) { }

  ionViewWillEnter() {
    this.getPosts();
  }

  ngOnInit() {
  }

  getPosts() {
    this.api.getPosts().subscribe((data) => {
      this.image = data[0].image;
      this.title = data[0].title;
      this.author = data[0].author;
    });
  }

}
