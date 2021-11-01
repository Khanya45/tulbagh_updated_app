import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopAttractionsPage } from './top-attractions.page';

const routes: Routes = [
  {
    path: '',
    component: TopAttractionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopAttractionsPageRoutingModule {}
