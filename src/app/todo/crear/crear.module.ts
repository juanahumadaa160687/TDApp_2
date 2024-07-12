import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPageRoutingModule } from './crear-routing.module';

import { CrearPage } from './crear.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPageRoutingModule
  ],
  providers: [SQLite],
  declarations: [CrearPage]
})
export class CrearPageModule {}
