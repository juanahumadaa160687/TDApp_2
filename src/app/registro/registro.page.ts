import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  public nombre: string = '';
  public apellido: string = '';
  public correo: string   = '';
  public contrasena: string = '';
  public confirmarContrasena: string = '';

  constructor(private router:Router) { }

  ngOnInit() {
  }

  registrar(){
    if(this.contrasena == this.confirmarContrasena){
      localStorage.setItem('firstname', this.nombre);
      localStorage.setItem('lastname', this.apellido);
      localStorage.setItem('email', this.correo);
      localStorage.setItem('password', this.contrasena);
      this.presentAlert();
      this.router.navigate(['/login']);
    }
    else{
      this.presentAlertError();
    }
  }

  async presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Registro exitoso';
    alert.message = 'Se ha registrado correctamente';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
  }

  async presentAlertError() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Error';
    alert.message = 'Las contraseñas no coinciden';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
  }
}
