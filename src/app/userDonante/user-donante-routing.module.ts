import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../_guards';


import { CargarUserDonanteComponent } from './cargar-user-donante/cargar-user-donante.component';
import { ListarUserDonanteComponent } from './listar-user-donante/listar-user-donante.component';
import { Role } from '../_models'




const routes: Routes = [
  {
    path: 'crearUsuarioDonante',
    component: CargarUserDonanteComponent,
    canActivate: [AuthGuard],
    data:{ roles: [Role.Banco] }
  },
  {
    path: 'listarUsuariosDonantes',
    component: ListarUserDonanteComponent,
    canActivate: [AuthGuard],
    data:{ roles: [Role.Banco] }
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
export class UserDonanteRoutingModule { }
