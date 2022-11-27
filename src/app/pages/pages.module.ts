import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { ProductComponent } from './product/product.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent, //sale error porque se los debe importar
    ProductComponent,
    CatalogueComponent,
    PagesComponent,
  ],
  exports: [ //para que se usen fuera de este modulo
    DashboardComponent,
    ProductComponent,
    CatalogueComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    //SharedModule,
    AppRoutingModule,
  ],
})
export class PagesModule { }
