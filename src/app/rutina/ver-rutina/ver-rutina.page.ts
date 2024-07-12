import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbAppService } from 'src/app/db/db-app.service';

@Component({
  selector: 'app-ver-rutina',
  templateUrl: './ver-rutina.page.html',
  styleUrls: ['./ver-rutina.page.scss'],
})
export class VerRutinaPage implements OnInit {

  id: any;
  rutina: any;
  act1: any;
  act2: any;
  act3: any;
  act4: any;
  act5: any;

  constructor(private db: DbAppService, private router: Router, private activatedRouter: ActivatedRoute) {
    this.activatedRouter.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.id = this.router.getCurrentNavigation()?.extras?.state?.['idEnviado'];
        this.rutina = this.router.getCurrentNavigation()?.extras?.state?.['rutinaEnviada'];
        this.act1 = this.router.getCurrentNavigation()?.extras?.state?.['act1Enviada'];
        this.act2 = this.router.getCurrentNavigation()?.extras?.state?.['act2Enviada'];
        this.act3 = this.router.getCurrentNavigation()?.extras?.state?.['act3Enviada'];
        this.act4 = this.router.getCurrentNavigation()?.extras?.state?.['act4Enviada'];
        this.act5 = this.router.getCurrentNavigation()?.extras?.state?.['act5Enviada'];
      }
    });
  }

  ngOnInit() {
  }

}
