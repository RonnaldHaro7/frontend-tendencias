import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    DashboardComponent,
    ProductComponent,
    CatalogueComponent,
    PagesComponent,
  ],
  exports: [
    DashboardComponent,
    ProductComponent,
    CatalogueComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthModule,
    AppRoutingModule
  ],
})
export class PagesModule { }
