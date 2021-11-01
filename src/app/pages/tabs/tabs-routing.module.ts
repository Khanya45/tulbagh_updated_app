import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'discover',
        loadChildren: () =>
          import('../discover/discover.module').then(
            (m) => m.DiscoverPageModule
          ),
      },
      {
        path: 'promotions',
        loadChildren: () =>
          import('../promotions/promotions.module').then(
            (m) => m.PromotionsPageModule
          ),
      },
      {
        path: 'events',
        loadChildren: () =>
          import('../events/events.module').then((m) => m.EventsPageModule),
      },
      {
        path: 'liked',
        loadChildren: () =>
          import('../liked/liked.module').then((m) => m.LikedPageModule),
      },
      {
        path: 'main',
        loadChildren: () =>
          import('../main/main.module').then((m) => m.MainPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/discover',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
