import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { DiscoverPageRoutingModule } from './discover-routing.module';
import { DiscoverPage } from './discover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverPageRoutingModule,
    SharedModule,
  ],
  declarations: [DiscoverPage],
})
export class DiscoverPageModule {}
