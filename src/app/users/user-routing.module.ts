import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../_guards';


import { CreateComponent } from './cargar-user-banco/create.component';
import { ListComponent } from './listar-user-banco/list.component';
import { UpdateComponent } from './update-user-banco/update.component';
import { ViewComponent } from './view/view.component';
import { Role } from '../_models'




const routes: Routes = [
  {
    path: 'crearUsuario',
    component: CreateComponent,
    canActivate: [AuthGuard],
    data:{ roles: [Role.Admin] }
  },
  {
    path: 'listarUsuarios',
    component: ListComponent,
    canActivate: [AuthGuard],
    data:{ roles: [Role.Admin] }
  },
  {
    path: 'actualizarUsuario',
    component: UpdateComponent,
    canActivate: [AuthGuard],
    data:{ roles: [Role.Admin] }
  },
  {
    path: 'verUsuario',
    component: ViewComponent,
    canActivate: [AuthGuard],
    data:{ roles: [Role.Admin] }
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
