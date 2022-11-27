import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NopagesfoundComponent } from './nopagesfound/nopagesfound.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NopagesfoundComponent,
  ],
  exports: [
    DashboardComponent,
    NopagesfoundComponent,
  ],
  imports: [
    CommonModule,
    DashboardComponent,
  ]
})
export class PagesRoutingModule { }
