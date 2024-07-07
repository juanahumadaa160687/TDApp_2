import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbAppService {

  public db!: SQLiteObject;

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private toastController: ToastController, private alertController: AlertController) {
    this.initDatabase()
  }

  private initDatabase() {
    this.sqlite.create({
      name: 'tdapp.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.db = db;
        this.isDbReady.next(true);
        this.createTables();
        this.presentToast('Database ready');
      })
      .catch(e => this.presentToast('Error creating database'));
    }

    getIsDBReady() {
      return this.isDbReady.asObservable();
    }

    private createTables() {
      this.db.executeSql('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, nombre TEXT, apellido TEXT, correo TEXT, contrasena TEXT)', [])
        .then(() => this.presentToast('Table created'))
        .catch(e => this.presentToast('Error creating table' + e));
    }

    agregarUsuario(nombre: string, apellido: string, correo: string, contrasena: string) {
      let data = [nombre, apellido, correo, contrasena];
      return this.db.executeSql('INSERT OR IGNORE INTO users (nombre, apellido, correo, contrasena) VALUES (?, ?, ?, ?)', data)
        .then(() => this.presentToast('Usuario registrado'))
        .catch(e => this.presentToast('Error al registrar usuario' + e));
    }

    validarUsuario(correo: string, contrasena: string) {
      return this.db.executeSql('SELECT * FROM users WHERE correo = ? AND contrasena = ?', [correo, contrasena])
        .then((data) => {
          if (data.rows.length > 0) {
            return data.rows.item(0);
          } else {
            this.presentToast('Credenciales incorrectas');
            return null;
          }
        })
        .catch(e => this.presentToast('Error al validar usuario' + e));
    }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      icon: 'globe',
    });
    await toast.present();
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
