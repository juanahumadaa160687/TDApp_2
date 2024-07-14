import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogPage } from './blog.page';

const routes: Routes = [
  {
    path: '',
    component: BlogPage
  },
  {
    path: 'verblog/:id',
    loadChildren: () => import('./verblog/verblog.module').then( m => m.VerblogPageModule)
  },
  {
    path: '',
    redirectTo: '/tabs/blog',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogPageRoutingModule {}
