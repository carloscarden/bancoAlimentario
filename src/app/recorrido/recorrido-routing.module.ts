import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../_guards';
import { Routes, RouterModule } from '@angular/router';

import { Role } from '../_models';
import { ListarRecorridosComponent } from './listar-recorridos/listar-recorridos.component';
import { VerCargaRecorridosComponent} from './ver-carga-recorridos/ver-carga-recorridos.component';

const routes: Routes = [
  {
    path: 'crearNuevoRecorrido',
    component: VerCargaRecorridosComponent,
    canActivate: [AuthGuard],
    data:{ roles: [Role.Banco] }
  },
  {
    path: 'listarRecorridos',
    component: ListarRecorridosComponent,
    canActivate: [AuthGuard],
    data:{ roles: [Role.Banco] }
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
export class RecorridoRoutingModule { }
