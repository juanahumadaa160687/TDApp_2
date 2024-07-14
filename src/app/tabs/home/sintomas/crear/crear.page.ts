import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbAppService } from 'src/app/db/db-app.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  descripcion: string = '';
  fecha: string = '';

  constructor(private db: DbAppService, private router: Router) { }

  ngOnInit() {
  }

  enviarSintoma(){
    this.db.crearSintoma(this.descripcion, this.fecha);
    this.db.presentToast('Sintoma guardado');
    this.router.navigate(['/tabs/home/sintomas']);
  }

}
