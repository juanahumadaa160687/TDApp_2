import { Component, HostAttributeToken, OnInit } from '@angular/core';
import { DbAppService } from '../../../db/db-app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sintomas',
  templateUrl: './sintomas.page.html',
  styleUrls: ['./sintomas.page.scss'],
})
export class SintomasPage implements OnInit {

  arregloSintomas: any = [];

  constructor(private db: DbAppService, private router: Router) { }

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchSintomas().subscribe(item => {
          this.arregloSintomas = item;
        })
      }
    });
  }

}
