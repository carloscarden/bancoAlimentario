import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../_guards';


import { CargarUserBancoComponent } from './cargar-user-banco/cargar-user-banco.component';
import { ListarUserBancoComponent } from './listar-user-banco/listar-user-banco.component';
import { UpdateUserBancoComponent } from './update-user-banco/update-user-banco.component';
import { ViewUserBancoComponent } from './view-user-banco/view-user-banco.component';
import { Role } from '../_models';




const routes: Routes = [
  {
    path: 'crearUsuario',
    component: CargarUserBancoComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'listarUsuarios',
    component: ListarUserBancoComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'actualizarUsuario',
    component: UpdateUserBancoComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'verUsuario',
    component: ViewUserBancoComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],

  exports: [RouterModule],
  declarations: []
})
export class UserRoutingModule { }
