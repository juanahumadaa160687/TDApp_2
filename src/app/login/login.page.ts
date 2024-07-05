import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor( private router:Router) { }

  ngOnInit() {
  }

  login() {
    if (this.email === localStorage.getItem('email') && this.password === localStorage.getItem('password')) {
      console.log('Login exitoso');
      this.presentToast();
      this.router.navigate(['/tabs']);
    } else {
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
    toast.message = 'Bienvenido' + ' ' + localStorage.getItem('firstname')
    toast.duration = 2000;
    toast.position = 'top';

    document.body.appendChild(toast);
    return toast.present();
  }
}
