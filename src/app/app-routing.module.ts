import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards';

import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { PerfilComponent } from './settings/perfil/perfil.component';
import { ListarComentariosComponent } from './foro/listar-comentarios/listar-comentarios.component';
import { Role } from './_models/role';


const routes: Routes = [
  {
    path: '',
    component: PerfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'foro',
    component: ListarComentariosComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Donante, Role.Banco] }
  },
  {
    path: 'producto',
    loadChildren: './producto/producto.module#ProductoModule'
  },
  {
    path: 'usuarioBanco',
    loadChildren: './userBanco/users.module#UsersModule'
  },
  {
    path: 'donacion',
    loadChildren: './donacion/donacion.module#DonacionModule'
  },
  {
    path: 'recorrido',
    loadChildren: './recorrido/recorrido.module#RecorridoModule'
  },
  {
    path: 'usuarioDonante',
    loadChildren: './userDonante/user-donante.module#UserDonanteModule'
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
