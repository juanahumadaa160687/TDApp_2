import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EliminarRutinaPageRoutingModule } from './eliminar-rutina-routing.module';

import { EliminarRutinaPage } from './eliminar-rutina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EliminarRutinaPageRoutingModule
  ],
  declarations: [EliminarRutinaPage]
})
export class EliminarRutinaPageModule {}
