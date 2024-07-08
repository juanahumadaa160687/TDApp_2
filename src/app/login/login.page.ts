import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbAppService } from '../db/db-app.service';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ' ';
  password: string = '';

  constructor( private router:Router, private db: DbAppService, private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {
  }

  async login() {
    const usuario = await this.db.validarUsuario(this.email, this.password);
    if (usuario != null) {
      this.router.navigate(['/tabs']);
    }else {
      this.presentErrorAlert();
  }
}

  async presentErrorAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Error';
    alert.message = 'Credenciales incorrectas';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
  }
  
  async presentToast() {
    const toast = document.createElement('ion-toast');
    toast.message = 'Bienvenido';
    toast.duration = 2000;
    toast.position = 'top';

    document.body.appendChild(toast);
    return toast.present();
  }
}
