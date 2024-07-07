import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaRutinaPageRoutingModule } from './nueva-rutina-routing.module';

import { NuevaRutinaPage } from './nueva-rutina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaRutinaPageRoutingModule
  ],
  declarations: [NuevaRutinaPage]
})
export class NuevaRutinaPageModule {}
