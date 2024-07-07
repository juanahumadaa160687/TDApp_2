import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-rutina',
  templateUrl: './nueva-rutina.page.html',
  styleUrls: ['./nueva-rutina.page.scss'],
})
export class NuevaRutinaPage implements OnInit {

  public rutina = {
    nombre: '',
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
  }

  routines: any = [];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  guardarRutina() {
    this.routines.push(this.rutina);
    console.log(this.routines);
    localStorage.setItem('routines', JSON.stringify(this.routines));
  }

}
