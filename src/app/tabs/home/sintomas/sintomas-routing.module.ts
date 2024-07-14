import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SintomasPage } from './sintomas.page';

const routes: Routes = [
  {
    path: '',
    component: SintomasPage
  },
  {
    path: 'crear',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule)
  },
  {
    path: 'eliminar/:id',
    loadChildren: () => import('./eliminar/eliminar.module').then( m => m.EliminarPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SintomasPageRoutingModule {}
