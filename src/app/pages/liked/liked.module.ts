import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { LikedPageRoutingModule } from './liked-routing.module';
import { LikedPage } from './liked.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LikedPageRoutingModule,
    SharedModule,
  ],
  declarations: [LikedPage],
})
export class LikedPageModule {}
