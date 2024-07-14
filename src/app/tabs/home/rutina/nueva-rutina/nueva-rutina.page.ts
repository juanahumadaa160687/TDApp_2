import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbAppService } from 'src/app/db/db-app.service';

@Component({
  selector: 'app-nueva-rutina',
  templateUrl: './nueva-rutina.page.html',
  styleUrls: ['./nueva-rutina.page.scss'],
})
export class NuevaRutinaPage implements OnInit {

  nombre_rutina: string = '';
  act1: string = '';
  act2: string = '';
  act3: string = '';
  act4: string = '';
  act5: string = '';


  constructor(private router:Router, private db: DbAppService) { }

  ngOnInit() {
   
  }

  enviarRutina(){
    this.db.insertarRutina(this.nombre_rutina, this.act1, this.act2, this.act3, this.act4, this.act5);
    this.db.presentToast('Rutina guardada');
    this.router.navigate(['/tabs/home/rutina']);
  }
  
}
