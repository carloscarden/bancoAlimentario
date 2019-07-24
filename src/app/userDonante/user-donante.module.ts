import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';




import { CargarUserDonanteComponent } from './cargar-user-donante/cargar-user-donante.component';
import { ListarUserDonanteComponent } from './listar-user-donante/listar-user-donante.component';
import { UserDonanteRoutingModule } from './user-donante-routing.module'




@NgModule({
  imports: [
    UserDonanteRoutingModule
  ],

  exports: [RouterModule],
  declarations: [
    CargarUserDonanteComponent,
    ListarUserDonanteComponent
  ]
})
export class UserDonanteModule { }
