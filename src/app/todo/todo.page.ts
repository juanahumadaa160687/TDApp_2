import { Component, OnInit } from '@angular/core';
import { DbAppService } from '../db/db-app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  arregloToDo: any = [
    {
      id: '',
      actividad: '',
      fecha: ''
    }
  ]

  constructor(private db: DbAppService, private router: Router) { }

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchTodos().subscribe(item => {
          this.arregloToDo = item;
        })
      }
    });
  }

  deleteActividad(x: any){
    this.db.eliminarActividad(x.id);
    this.db.presentToast('Actividad eliminada');
  }

}
