import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../../../services/api.service";
import {BlogPage} from "../blog.page";

@Component({
  selector: 'app-verblog',
  templateUrl: './verblog.page.html',
  styleUrls: ['./verblog.page.scss'],
})
export class VerblogPage implements OnInit {

  public id: any;
  public blog: any = [];

  constructor(private api: ApiService, private router:Router, private activatedroute: ActivatedRoute) {
  }


  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.api.getPost(this.id).subscribe((response) => {
      this.blog = response;
    });
  }
}

