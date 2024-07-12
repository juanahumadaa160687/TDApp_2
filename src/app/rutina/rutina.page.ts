import { Component, OnInit } from '@angular/core';
import { DbAppService } from '../db/db-app.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.page.html',
  styleUrls: ['./rutina.page.scss'],
})
export class RutinaPage implements OnInit {

  arregloRutinas: any = [
    {
      id: '',
      nombre_rutina: '',
      act1: '',
      act2: '',
      act3: '',
      act4: '',
      act5: ''
    }
  ];

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

  deleteRutina(x: any){
    this.db.eliminarRutina(x.id);
    this.db.presentToast('Rutina eliminada');
  }

  buscarRutina(x: any){
    let navigationExtras: NavigationExtras = {
      state: {
        idEnviado: x.id,
        rutinaEnviada: x.nombre_rutina,
        act1Enviada: x.act1,
        act2Enviada: x.act2,
        act3Enviada: x.act3,
        act4Enviada: x.act4,
        act5Enviada: x.act5
      }
    };
    this.router.navigate(['rutina/ver-rutina/' + x.id], navigationExtras);
  }
    
}
