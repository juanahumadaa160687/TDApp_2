import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Rutinas } from '../services/rutinas';
import { ToDo } from '../services/to-do';
import { Meds } from '../services/meds';
import { Sintomas } from '../services/sintomas';


@Injectable({
  providedIn: 'root'
})


export class DbAppService {

  public db!: SQLiteObject;

  tablaRutina: string = 'CREATE TABLE IF NOT EXISTS rutinas(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre_rutina TEXT, act1 TEXT, act2 TEXT, act3 TEXT, act4 TEXT, act5 TEXT)'
  registroRutina: string = 'INSERT INTO rutinas (nombre_rutina, act1, act2, act3, act4, act5) VALUES (?, ?, ?, ?, ?, ?)'
  listaRutinas = new BehaviorSubject([]);

  tablaTodo: string = 'CREATE TABLE IF NOT EXISTS todo (id INTEGER PRIMARY KEY AUTOINCREMENT, actividad TEXT, fecha TEXT)'
  registroTodo: string = 'INSERT INTO todo (actividad, fecha) VALUES (?, ?)'
  listaTodo = new BehaviorSubject([]);

  tablaMedicamentos: string = 'CREATE TABLE IF NOT EXISTS medicamentos(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, dosis TEXT, hora TEXT)'
  registroMedicamento: string = 'INSERT INTO medicamentos (nombre, dosis, hora) VALUES (?, ?, ?)'
  listaMedicamentos = new BehaviorSubject([]);

  tablaSintomas: string = 'CREATE TABLE IF NOT EXISTS sintomas(id INTEGER PRIMARY KEY AUTOINCREMENT, descripcion TEXT, fecha TEXT)'
  registroSintoma: string = 'INSERT INTO sintomas (descripcion, fecha) VALUES (?, ?)'
  listaSintomas = new BehaviorSubject([]);

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private platform: Platform, private toastController: ToastController, private alertController: AlertController) {
    this.initDatabase()
    this.crearBD()
  }

  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'tdapp.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          this.db = db;
          this.createTableUsuario();
          this.crearTablaRutina();
          this.crearTablaTodo();
          this.crearTablaMedicamentos();
          this.crearTablaSintomas();
          this.presentToast('Database ready');
        })
        .catch(e => this.presentToast('Error creating database'));
    });
  }
  async crearTablaSintomas() {
    try{
      await this.db.executeSql(this.tablaSintomas, [])
      this.buscarSintomas();
      this.isDbReady.next(true);
    } catch (error) {
      this.presentToast('Error creating table' + error);
    }
  }

  buscarSintomas() {
    return this.db.executeSql('Select * FROM sintomas', []).then(res => {
      let items: Sintomas[] = [];

      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            descripcion: res.rows.item(i).descripcion,
            fecha: res.rows.item(i).fecha
          });
        }
      }
      this.listaSintomas.next(items as any);
    })
  }

  fetchSintomas(): Observable<ToDo[]> {
    return this.listaSintomas.asObservable();
  }

  crearSintoma(descripcion: string, fecha: string) {
    let data = [descripcion, fecha];
    return this.db.executeSql(this.registroSintoma, data)
      .then(res => {
        this.presentToast('Sintoma registrado correctamente');
        this.buscarSintomas();
      })
      .catch(e => this.presentToast('Error al registrar sintoma' + e));
  }

  eliminarSintoma(id: number) {
    return this.db.executeSql('DELETE FROM sintomas WHERE id = ?', [id])
      .then(res => {
        this.presentToast('Sintoma eliminado correctamente');
        this.buscarSintomas();
      })
      .catch(e => this.presentToast('Error al eliminar sintoma' + e));
  }

  async crearTablaMedicamentos() {
    try{
      await this.db.executeSql(this.tablaMedicamentos, [])
      this.buscarMedicamentos();
      this.isDbReady.next(true);
    } catch (error) {
      this.presentToast('Error creating table' + error);
    }
  }

  buscarMedicamentos() {
    return this.db.executeSql('Select * FROM medicamentos', []).then(res => {
      let items: Meds[] = [];

      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            nombre: res.rows.item(i).nombre,
            dosis: res.rows.item(i).dosis,
            hora: res.rows.item(i).hora
          });
        }
      }
      this.listaMedicamentos.next(items as any);
    })
  }

  fetchMedicamentos(): Observable<ToDo[]> {
    return this.listaMedicamentos.asObservable();
  }

  eliminarMedicamento(id: number) {
    return this.db.executeSql('DELETE FROM medicamentos WHERE id = ?', [id])
      .then(res => {
        this.presentToast('Medicamento eliminado correctamente');
        this.buscarMedicamentos();
      })
      .catch(e => this.presentToast('Error al eliminar medicamento' + e));
  }

  crearMedicamento(nombre_medicamento: string, dosis: string, hora: string) {
    let data = [nombre_medicamento, dosis, hora];
    return this.db.executeSql(this.registroMedicamento, data)
      .then(res => {
        this.presentToast('Medicamento registrado correctamente');
        this.buscarMedicamentos();
      })
      .catch(e => this.presentToast('Error al registrar medicamento' + e));
  }

  async crearTablaTodo() {
    try{
      await this.db.executeSql(this.tablaTodo, [])
      this.buscarTodos();
      this.isDbReady.next(true);
    } catch (error) {
      this.presentToast('Error creating table' + error);
    }
  }

  buscarTodos() {
    return this.db.executeSql('Select * FROM todo', []).then(res => {
      let items: ToDo[] = [];

      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            actividad: res.rows.item(i).actividad,
            fecha: res.rows.item(i).fecha
          });
        }
      }
      this.listaTodo.next(items as any);
    })
  }

  fetchTodos(): Observable<ToDo[]> {
    return this.listaTodo.asObservable();
  }

  async crearTablaRutina() {
    try{
      await this.db.executeSql(this.tablaRutina, [])
      this.buscarRutinas();
      this.isDbReady.next(true);
    } catch (error) {
      this.presentToast('Error creating table' + error);
    }
  }

  buscarRutinas() {
    return this.db.executeSql('Select * FROM rutinas', []).then(res => {
      let items: Rutinas[] = [];

      if (res.rows.length > 0) {
        for (let i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            nombre_rutina: res.rows.item(i).nombre_rutina,
            act1: res.rows.item(i).act1,
            act2: res.rows.item(i).act2,
            act3: res.rows.item(i).act3,
            act4: res.rows.item(i).act4,
            act5: res.rows.item(i).act5
          });
        }
      }
      this.listaRutinas.next(items as any);
    })
  }

  buscarRutinasPorId(id: number) {
    return this.db.executeSql('SELECT * FROM rutinas WHERE id = ?', [id])
      .then((data) => {
        if (data.rows.length > 0) {
          return data.rows.item(0);
        } else {
          return null;
        }
      })
      .catch(e => this.presentToast('Error al obtener rutina' + e));
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  fetchRutinas(): Observable<Rutinas[]> {
    return this.listaRutinas.asObservable();
  }

  insertarTodoActividad(actividad: string, fecha: string) {
    let data = [actividad, fecha];
    return this.db.executeSql(this.registroTodo, data)
      .then(res => {
        this.presentToast('Actividad registrada correctamente');
        this.buscarTodos();
      })
      .catch(e => this.presentToast('Error al registrar actividad' + e));
  }

  eliminarActividad(id: number) {
    return this.db.executeSql('DELETE FROM todo WHERE id = ?', [id])
      .then(res => {
        this.presentToast('Actividad eliminada correctamente');
        this.buscarTodos();
      })
      .catch(e => this.presentToast('Error al eliminar actividad' + e));
  }


  private initDatabase() {
    this.sqlite.create({
      name: 'tdapp.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.db = db;
        this.isDbReady.next(true);
        this.createTableUsuario();
        this.presentToast('Database ready');
      })
      .catch(e => this.presentToast('Error creating database'));
    }

    getIsDBReady() {
      return this.isDbReady.asObservable();
    }

    async createTableUsuario() {
      await this.db.executeSql('CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY, nombre TEXT, apellido TEXT, correo TEXT, contrasena TEXT)', [])
        .then(() => this.presentToast('Table usuario created'))
        .catch(e => this.presentToast('Error creating table' + e));
        this.isDbReady.next(true);
    }

    


    // CRUD de usuarios
    agregarUsuario(nombre: string, apellido: string, correo: string, contrasena: string) {
      let data = [nombre, apellido, correo, contrasena];
      return this.db.executeSql('INSERT OR IGNORE INTO users (nombre, apellido, correo, contrasena) VALUES (?, ?, ?, ?)', data)
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

    obtenerUsuario() {
      return this.db.executeSql('SELECT * FROM users', [])
        .then((data) => {
          if (data.rows.length > 0) {
            return data.rows.item(0);
          }
          return null;
        })
        .catch(e => this.presentToast('Error al obtener usuario' + e));
    }

    // CRUD de rutinas

    

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

  insertarRutina(nombre_rutina: string, act1: string, act2: string, act3: string, act4: string, act5: string) {
    let data = [nombre_rutina, act1, act2, act3, act4, act5];
    return this.db.executeSql(this.registroRutina, data)
      .then(res => {
        this.presentToast('Rutina registrada correctamente');
        this.buscarRutinas();
      })
      .catch(e => this.presentToast('Error al registrar rutina' + e));
  }

  eliminarRutina(id: number) {
    return this.db.executeSql('DELETE FROM rutinas WHERE id = ?', [id])
      .then(res => {
        this.presentToast('Rutina eliminada correctamente');
        this.buscarRutinas();
      })
      .catch(e => this.presentToast('Error al eliminar rutina' + e));
  }

}
