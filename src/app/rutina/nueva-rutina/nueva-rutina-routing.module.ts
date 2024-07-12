import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaRutinaPage } from './nueva-rutina.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaRutinaPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaRutinaPageRoutingModule {}
