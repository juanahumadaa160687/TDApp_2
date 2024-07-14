import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerblogPage } from './verblog.page';

const routes: Routes = [
  {
    path: '',
    component: VerblogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerblogPageRoutingModule {}
