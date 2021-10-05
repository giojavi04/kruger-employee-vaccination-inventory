import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './users/create/create.component';
import { UsersComponent } from './users/users.component';
import { ViewComponent } from './users/view/view.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'usuarios', component: UsersComponent },
      { path: 'usuarios/crear', component: CreateComponent },
      { path: 'usuarios/actualizar/:idUser', component: CreateComponent },
      { path: 'usuarios/:idUser', component: ViewComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
