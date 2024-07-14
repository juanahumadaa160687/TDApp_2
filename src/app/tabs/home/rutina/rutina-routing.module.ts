import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RutinaPage } from './rutina.page';

const routes: Routes = [
  {
    path: '',
    component: RutinaPage,
  },
  {
    path: 'nueva_rutina',
    loadChildren: () => import('./nueva-rutina/nueva-rutina.module').then( m => m.NuevaRutinaPageModule),
  },
  {
    path: '',
    redirectTo: 'rutina',
    pathMatch: 'full'
  },
  {
    path: 'eliminar/:id',
    loadChildren: () => import('./eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RutinaPageRoutingModule {}
