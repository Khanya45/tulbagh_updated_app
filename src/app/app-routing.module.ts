import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/tabs/tabs.module').then((m) => m.TabsPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'top-attractions',
    loadChildren: () =>
      import('./pages/top-attractions/top-attractions.module').then(
        (m) => m.TopAttractionsPageModule
      ),
  },
  {
    path: 'weather',
    loadChildren: () =>
      import('./pages/weather/weather.module').then((m) => m.WeatherPageModule),
  },
  {
    path: 'business',
    loadChildren: () =>
      import('./pages/business/business.module').then(
        (m) => m.BusinessPageModule
      ),
  },
  {
    path: 'business-info',
    loadChildren: () =>
      import('./pages/business-info/business-info.module').then(
        (m) => m.BusinessInfoPageModule
      ),
  },
  {
    path: 'blog-details',
    loadChildren: () =>
      import('./pages/blog-details/blog-details.module').then(
        (m) => m.BlogDetailsPageModule
      ),
  },
  {
    path: 'event-details',
    loadChildren: () =>
      import('./pages/event-details/event-details.module').then(
        (m) => m.EventDetailsPageModule
      ),
  },
  {
    path: 'profile-info',
    loadChildren: () =>
      import('./pages/profile-info/profile-info.module').then(
        (m) => m.ProfileInfoPageModule
      ),
  },
  {
    path: 'business-search',
    loadChildren: () => import('./pages/business-search/business-search.module').then( m => m.BusinessSearchPageModule)
  },  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
