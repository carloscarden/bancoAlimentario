import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';




import { CargarUserDonanteComponent } from './cargar-user-donante/cargar-user-donante.component';
import { ListarUserDonanteComponent } from './listar-user-donante/listar-user-donante.component';
import { UserDonanteRoutingModule } from './user-donante-routing.module'

import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule }   from '@angular/forms';



@NgModule({
  imports: [
    UserDonanteRoutingModule,
    MatInputModule,
    MatDialogModule,
    CommonModule,
    FormsModule
  ],

  exports: [RouterModule],
  declarations: [
    CargarUserDonanteComponent,
    ListarUserDonanteComponent
  ]
})
export class UserDonanteModule { }
