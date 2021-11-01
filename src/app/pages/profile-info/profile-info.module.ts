import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { IonicModule } from '@ionic/angular';
import { ProfileInfoPageRoutingModule } from './profile-info-routing.module';
import { ProfileInfoPage } from './profile-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfileInfoPageRoutingModule,
    LeafletModule,
  ],
  declarations: [ProfileInfoPage],
})
export class ProfileInfoPageModule {}
