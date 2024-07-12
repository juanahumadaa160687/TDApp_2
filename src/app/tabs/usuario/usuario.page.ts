import { Component, OnInit } from '@angular/core';
import { DbAppService } from 'src/app/db/db-app.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  usuario: any = [];

  isDbReady: boolean = false;

  constructor( private db: DbAppService) { }

  ngOnInit() {
    this.db.getIsDBReady().subscribe((ready) => {
      if (ready) {
        this.getUsuarios();
      }
  })
}

  getUsuarios() {
    this.db.obtenerUsuario().then((usuarios) => {
      this.usuario.push(usuarios);
    });
  }
}
