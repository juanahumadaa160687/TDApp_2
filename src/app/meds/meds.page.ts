import { Component, OnInit } from '@angular/core';
import { DbAppService } from '../db/db-app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meds',
  templateUrl: './meds.page.html',
  styleUrls: ['./meds.page.scss'],
})
export class MedsPage implements OnInit {

  arregloMeds: any = [
    {
      id: '',
      nombre_medicamento: '',
      dosis: '',
      hora: '',
    }
  ];

  constructor(private db: DbAppService, private router: Router) { }

  ngOnInit() {
    this.db.dbState().subscribe((res) => {
      if(res){
        this.db.fetchMedicamentos().subscribe(item => {
          this.arregloMeds = item;
        })
      }
    });
  }

  deleteMed(x: any){
    this.db.eliminarMedicamento(x.id);
    this.db.presentToast('Medicamento eliminado');
  }
}
