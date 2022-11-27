import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './pages/product/product.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { PagesComponent } from './pages/pages.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CatalogueComponent,
    LoginComponent,
    RegisterComponent,
    BreadcrumbsComponent,
    PagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    //PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
