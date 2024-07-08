import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerBlogPage } from './ver-blog.page';

const routes: Routes = [
  {
    path: '',
    component: VerBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerBlogPageRoutingModule {}
