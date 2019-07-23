import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { CargarUserBancoComponent } from './cargar-user-banco/cargar-user-banco.component';
import { ListarUserBancoComponent } from './listar-user-banco/listar-user-banco.component';
import { UpdateUserBancoComponent } from './update-user-banco/update-user-banco.component';
import { ViewUserBancoComponent } from './view-user-banco/view-user-banco.component';
import { UserRoutingModule } from './user-routing.module'




@NgModule({
  imports: [
    UserRoutingModule
  ],

  exports: [RouterModule],
  declarations: [
    CargarUserBancoComponent,
    ListarUserBancoComponent,
    UpdateUserBancoComponent,
    ViewUserBancoComponent
  ]
})
export class UsersModule { }
