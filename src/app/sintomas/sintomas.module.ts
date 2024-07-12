import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SintomasPageRoutingModule } from './sintomas-routing.module';

import { SintomasPage } from './sintomas.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SintomasPageRoutingModule
  ],
  providers: [SQLite],
  declarations: [SintomasPage]
})
export class SintomasPageModule {}
