import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaRutinaPageRoutingModule } from './nueva-rutina-routing.module';

import { NuevaRutinaPage } from './nueva-rutina.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaRutinaPageRoutingModule
  ],
  providers: [SQLite],
  declarations: [NuevaRutinaPage]
})
export class NuevaRutinaPageModule {}
