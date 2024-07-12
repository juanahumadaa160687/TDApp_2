import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedsPageRoutingModule } from './meds-routing.module';

import { MedsPage } from './meds.page';
import { SQLite } from '@awesome-cordova-plugins/sqlite';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedsPageRoutingModule
  ],
  providers: [SQLite],
  declarations: [MedsPage]
})
export class MedsPageModule {}
