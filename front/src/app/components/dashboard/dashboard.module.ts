import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { MaterialModule } from '../../material/material.module';
import { DialogDeleteComponent } from './users/dialog-delete/dialog-delete.component';
import { ViewComponent } from './users/view/view.component';
import { CreateComponent } from './users/create/create.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    DialogDeleteComponent,
    ViewComponent,
    CreateComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
