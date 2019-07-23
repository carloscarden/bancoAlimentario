import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards';

import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { PerfilComponent } from './settings/perfil/perfil.component';


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
    path:'producto',
    loadChildren: './producto/producto.module#ProductoModule'
  },
  {
    path:'usuarios',
    loadChildren: './users/users.module#UsersModule'
  },
  {
    path:'donacion',
    loadChildren: './donacion/donacion.module#DonacionModule'
  },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
