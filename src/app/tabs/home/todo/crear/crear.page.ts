import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbAppService } from 'src/app/db/db-app.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  actividad: string = '';
  fecha: string = '';

  constructor(private router:Router, private db: DbAppService) { }

  ngOnInit() {
  }

  enviarActividad(){
    this.db.insertarTodoActividad(this.actividad, this.fecha);
    this.db.presentToast('Actividad guardada');
    this.router.navigate(['/tabs/home/todo']);
  }
}
