import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbAppService } from 'src/app/db/db-app.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  id: any;

  constructor(private db: DbAppService, private router: Router, private activatedRouter: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRouter.snapshot.paramMap.get('id');
    this.deleteRutina();
  }

  deleteRutina(){
    this.db.eliminarRutina(this.id);
    this.router.navigate(['/tabs/home/rutina']);
  }

}
