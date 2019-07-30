import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { RouterModule } from '@angular/router';
import { CargarDonacionComponent } from './cargar-donacion/cargar-donacion.component';
import { ListarDonacionComponent } from './listar-donacion/listar-donacion.component';
import { UpdateDonacionComponent } from './update-donacion/update-donacion.component';
import { ViewDonacionComponent } from './view-donacion/view-donacion.component';
import { DonacionRoutingModule } from './donacion-routing.module';
import {MatDialogModule} from '@angular/material/dialog';


import { FormsModule }   from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {CrearProductoComponent} from '../producto/crear-producto/crear-producto.component'



@NgModule({
  imports: [
    DonacionRoutingModule,
    FormsModule,
    CommonModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [RouterModule],
  declarations: [
    CargarDonacionComponent,
    ListarDonacionComponent,
    UpdateDonacionComponent,
    ViewDonacionComponent,
    CrearProductoComponent
  ],
  entryComponents: [CrearProductoComponent],
})
export class DonacionModule { }
