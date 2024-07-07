import { Component, OnInit } from '@angular/core';
import { DbAppService } from '../db/db-app.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-rutina',
  templateUrl: './rutina.page.html',
  styleUrls: ['./rutina.page.scss'],
})
export class RutinaPage implements OnInit {

  arrayRutinas: any = [
    {
      id: 0,
      nombre_rutina: '',
      act1: '',
      act2: '',
      act3: '',
      act4: '',
      act5: '',
      act6: '',
      act7: '',
      act8: '',
      act9: '',
      act10: '',
      usuario_id: 0
    },
  ];

  constructor(private servicioBD: DbAppService, private router: Router) { }

  ngOnInit() {
      }
}
