import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cerrar-sesion',
  templateUrl: './cerrar-sesion.page.html',
  styleUrls: ['./cerrar-sesion.page.scss'],
})
export class CerrarSesionPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.router.navigate(['/landing']);
  }
}
