import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { CreateComponent } from './cargar-user-banco/create.component';
import { ListComponent } from './listar-user-banco/list.component';
import { UpdateComponent } from './update-user-banco/update.component';
import { ViewComponent } from './view/view.component';
import { UserRoutingModule } from './user-routing.module'




@NgModule({
  imports: [
    UserRoutingModule
  ],

  exports: [RouterModule],
  declarations: [
    CreateComponent,
    ListComponent,
    UpdateComponent,
    ViewComponent
  ]
})
export class UsersModule { }
