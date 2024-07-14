import { Component, OnInit } from '@angular/core';
import { DbAppService } from '../../../db/db-app.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.page.html',
  styleUrls: ['./rutina.page.scss'],
})
export class RutinaPage implements OnInit {

  arregloRutinas: any = [];

  constructor(private db: DbAppService, private router: Router) {
  }

  ngOnInit(){
    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchRutinas().subscribe(item => {
          this.arregloRutinas = item;
        })
      }
    });
  }
    
}
