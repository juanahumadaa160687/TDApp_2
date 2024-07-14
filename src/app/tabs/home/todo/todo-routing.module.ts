import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoPage } from './todo.page';

const routes: Routes = [
  {
    path: '',
    component: TodoPage
  },
  {
    path: 'crear',
    loadChildren: () => import('./crear/crear.module').then( m => m.CrearPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TodoPageRoutingModule {}
