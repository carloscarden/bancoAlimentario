import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../_guards';


import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { ViewComponent } from './view/view.component';



const routes: Routes = [
  {
    path: 'crearUsuario',
    component: CreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listarUsuario',
    component: ListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'actualizarUsuario',
    component: UpdateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'verUsuario',
    component: ViewComponent,
    canActivate: [AuthGuard],
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
export class UsersModule { }
