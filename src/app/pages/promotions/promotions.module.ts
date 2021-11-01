import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { PromotionsPageRoutingModule } from './promotions-routing.module';
import { PromotionsPage } from './promotions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PromotionsPageRoutingModule,
    SharedModule,
  ],
  declarations: [PromotionsPage],
})
export class PromotionsPageModule {}
