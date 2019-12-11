import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';

import { FirstComponentComponent } from './first-component/first-component.component';
import { FirstRouteRoutes } from './first-route.routing';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FirstRouteRoutes
  ],
  declarations: [
    FirstComponentComponent
  ]
})
export class FirstModuleModule { }
