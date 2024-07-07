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
  act6: string = '';
  act7: string = '';
  act8: string = '';
  act9: string = '';
  act10: string = '';
  id_usuario: number = 0;


  routines: any = [];

  constructor(private router:Router, private db: DbAppService) { }

  ngOnInit() {
  }
}
