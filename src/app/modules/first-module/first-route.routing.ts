import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstComponentComponent } from './first-component/first-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'first-route', pathMatch: 'full' },
  { path: 'first-route', component: FirstComponentComponent},
];

export const FirstRouteRoutes: ModuleWithProviders = RouterModule.forRoot(routes);
