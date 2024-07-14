import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerblogPageRoutingModule } from './verblog-routing.module';

import { VerblogPage } from './verblog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerblogPageRoutingModule
  ],
  declarations: [VerblogPage]
})
export class VerblogPageModule {}
