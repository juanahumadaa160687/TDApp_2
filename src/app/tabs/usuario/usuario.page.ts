import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbAppService } from 'src/app/db/db-app.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  usuario: any = [];

  correo: any = '';

  isDbReady: boolean = false;

  constructor( private db: DbAppService, private activatedRoute: ActivatedRoute, private http:HttpClient) {
    this.correo = this.activatedRoute.snapshot.paramMap.get('correo');
  }

  ngOnInit() {

    this.db.getIsDBReady().subscribe((ready) => {
      if (ready) {
        this.getUsuarios();
      }
  })
}

  getUsuarios() {
    this.db.obtenerUsuario(this.correo).then((usuarios) => {
      this.usuario.push(usuarios);
    });
  }
}
