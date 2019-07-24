import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CargarRecorridoComponent } from './cargar-recorrido/cargar-recorrido.component';
import { ListarRecorridosComponent } from './listar-recorridos/listar-recorridos.component';
import {RecorridoRoutingModule} from './recorrido-routing.module'

@NgModule({
  imports: [
    RecorridoRoutingModule
  ],

  exports: [RouterModule],
  declarations: [
    CargarRecorridoComponent,
    ListarRecorridosComponent
  ]
})
export class RecorridoModule { }
