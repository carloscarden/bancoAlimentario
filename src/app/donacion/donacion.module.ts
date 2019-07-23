import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CargarDonacionComponent } from './cargar-donacion/cargar-donacion.component';
import { ListarDonacionComponent } from './listar-donacion/listar-donacion.component';
import { UpdateDonacionComponent } from './update-donacion/update-donacion.component';
import { ViewDonacionComponent } from './view-donacion/view-donacion.component';
import { DonacionRoutingModule } from './donacion-routing.module'

@NgModule({
  imports: [
    DonacionRoutingModule
  ],
  exports: [RouterModule],
  declarations: [
    CargarDonacionComponent,
    ListarDonacionComponent,
    UpdateDonacionComponent,
    ViewDonacionComponent
  ]
})
export class DonacionModule { }
