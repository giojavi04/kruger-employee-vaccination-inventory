import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';
import { MaterialModule } from 'src/app/material/material.module';
import { DialogDeleteComponent } from './users/dialog-delete/dialog-delete.component';
import { DialogEditComponent } from './users/dialog-edit/dialog-edit.component';
import { DialogShowComponent } from './users/dialog-show/dialog-show.component';
import { InformationComponent } from './users/information/information.component';


@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    UsersComponent,
    DialogDeleteComponent,
    DialogEditComponent,
    DialogShowComponent,
    InformationComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
