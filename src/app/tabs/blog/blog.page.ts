import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {

  public blogs: any = [];

  constructor(private api:ApiService, private router: Router) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.api.getPosts().subscribe((response) => {
      this.blogs = response;
    });
  }

  getPost(x: any){
    let navigationExtras: NavigationExtras = {
      state: {
        idEnviado: x.id
      }
    }; this.router.navigate(['/tabs/blog/verblog'], navigationExtras);
    }

}
