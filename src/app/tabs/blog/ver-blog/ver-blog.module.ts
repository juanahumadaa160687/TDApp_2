import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerBlogPageRoutingModule } from './ver-blog-routing.module';

import { VerBlogPage } from './ver-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerBlogPageRoutingModule
  ],
  declarations: [VerBlogPage]
})
export class VerBlogPageModule {}
