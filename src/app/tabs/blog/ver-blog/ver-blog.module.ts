import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerBlogPageRoutingModule } from './ver-blog-routing.module';

import { VerBlogPage } from './ver-blog.page';
import { HttpClient, HttpHandler } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerBlogPageRoutingModule,
  ],
  providers: [HttpClient],
  declarations: [VerBlogPage]
})
export class VerBlogPageModule {}
