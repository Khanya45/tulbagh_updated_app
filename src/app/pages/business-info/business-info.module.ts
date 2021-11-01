import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { BusinessInfoPageRoutingModule } from './business-info-routing.module';
import { BusinessInfoPage } from './business-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusinessInfoPageRoutingModule,
    SharedModule,
  ],
  declarations: [BusinessInfoPage],
})
export class BusinessInfoPageModule {}
