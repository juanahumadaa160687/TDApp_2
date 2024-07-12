import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RutinaPageRoutingModule } from './rutina-routing.module';

import { RutinaPage } from './rutina.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RutinaPageRoutingModule
  ],
  providers: [SQLite],
  declarations: [RutinaPage]
})
export class RutinaPageModule {}
