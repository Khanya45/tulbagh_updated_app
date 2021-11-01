import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopAttractionsPageRoutingModule } from './top-attractions-routing.module';

import { TopAttractionsPage } from './top-attractions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopAttractionsPageRoutingModule
  ],
  declarations: [TopAttractionsPage]
})
export class TopAttractionsPageModule {}
