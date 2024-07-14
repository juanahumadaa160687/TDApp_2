import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbAppService } from 'src/app/db/db-app.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  nombre: string = '';
  dosis: string = '';
  hora: string = '';

  constructor(private db: DbAppService, private router: Router) { }

  ngOnInit() {
  }

  enviarMedicamento(){
    this.db.crearMedicamento(this.nombre, this.dosis, this.hora);
    this.db.presentToast('Medicamento guardado');
    this.router.navigate(['/tabs/home/meds']);
  }

}
