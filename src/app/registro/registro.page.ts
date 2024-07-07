import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbAppService } from '../db/db-app.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

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

  isDbReady: boolean = false;

  constructor(private router:Router, private db: DbAppService, private activatedroute: ActivatedRoute, private alertController: AlertController, private toastController: ToastController ) {
    this.activatedroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.nombre = this.router.getCurrentNavigation()?.extras?.state?.['nombre'];
        this.apellido = this.router.getCurrentNavigation()?.extras?.state?.['apellido'];
        this.correo = this.router.getCurrentNavigation()?.extras?.state?.['correo'];
        this.contrasena = this.router.getCurrentNavigation()?.extras?.state?.['contrasena'];
      }
    })
  }

  ngOnInit() {
    this.db.getIsDBReady().subscribe(isReady => {
      this.isDbReady = isReady;
    })
  }

  guardar(){
    if (this.contrasena === this.confirmarContrasena && this.contrasena.trim() != '' && this.nombre.trim() != '' && this.apellido.trim() != '' && this.correo.trim() != ''){
      this.guardarUsuario();
    } else {
      this.presentAlertError();
    }
  
  }

  guardarUsuario() {
    this.db.agregarUsuario(this.nombre, this.apellido, this.correo, this.contrasena)
      .then(() => {
        this.presentAlert();
        this.router.navigate(['/login']);
      })
      .catch(() => {
        this.presentAlertError});
  }

  async presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Registro exitoso';
    alert.message = 'Usuario registrado correctamente';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
  }

  async presentAlertError() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Error';
    alert.message = 'Algo anda mal, verifica tus datos';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
  }
}
