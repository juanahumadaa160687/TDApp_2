import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiRestService } from 'src/app/services/api-rest.service';

@Component({
  selector: 'app-ver-blog',
  templateUrl: './ver-blog.page.html',
  styleUrls: ['./ver-blog.page.scss'],
})
export class VerBlogPage implements OnInit {

  post: any = [];
  id: any;
  constructor(private router:Router, private api: ApiRestService, private activatedroute: ActivatedRoute) {
}

  ngOnInit(): void {
    this.id = this.activatedroute.snapshot.paramMap.get('id');
    this.getPost();
  }
  getPost() {
    this.api.getPost(this.id).subscribe((data) => {
      this.post.push(data.posts);
    });
  }
}

