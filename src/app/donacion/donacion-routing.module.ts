import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards';
import { CargarDonacionComponent } from './cargar-donacion/cargar-donacion.component';
import { ListarDonacionComponent } from './listar-donacion/listar-donacion.component';
import { UpdateDonacionComponent } from './update-donacion/update-donacion.component';
import { ViewDonacionComponent } from './view-donacion/view-donacion.component';
import { Role } from '../_models'

const routes: Routes = [
  {
    path: 'crearDonacion',
    component: CargarDonacionComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Donante] }
  },
  {
    path: 'listarDonaciones',
    component: ListarDonacionComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Banco] }
  },
  {
    path: 'actualizarDonacion',
    component: UpdateDonacionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'verDonacion',
    component: ViewDonacionComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Banco] }
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule]
})

export class DonacionRoutingModule { }
