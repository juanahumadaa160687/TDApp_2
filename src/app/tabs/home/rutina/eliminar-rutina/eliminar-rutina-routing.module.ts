import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EliminarRutinaPage } from './eliminar-rutina.page';

const routes: Routes = [
  {
    path: '',
    component: EliminarRutinaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EliminarRutinaPageRoutingModule {}
