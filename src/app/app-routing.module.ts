import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    PagesRoutingModule,
    SharedModule,
    AuthModule
  ]
})
export class AppRoutingModule { }
