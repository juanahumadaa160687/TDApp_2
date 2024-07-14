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

  constructor(private db: DbAppService, private activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get('id');
    this.eliminarMed();
    
  }

  eliminarMed(){
    this.db.eliminarMedicamento(this.id).then(() => {
      this.router.navigate(['/tabs/home/meds']);
    });
  }

}
