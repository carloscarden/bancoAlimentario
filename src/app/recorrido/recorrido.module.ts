import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';


import { CargarRecorridoComponent } from './cargar-recorrido/cargar-recorrido.component';
import { ListarRecorridosComponent } from './listar-recorridos/listar-recorridos.component';
import {RecorridoRoutingModule} from './recorrido-routing.module';
import { FormsModule } from '@angular/forms';


import {MatInputModule} from '@angular/material/input';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import { VerCargaRecorridosComponent } from './ver-carga-recorridos/ver-carga-recorridos.component';



@NgModule({
  imports: [
    RecorridoRoutingModule,
    CommonModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule
  ],

  exports: [RouterModule],
  declarations: [
    CargarRecorridoComponent,
    ListarRecorridosComponent,
    VerCargaRecorridosComponent
  ],
  entryComponents: [CargarRecorridoComponent],
})
export class RecorridoModule { }
