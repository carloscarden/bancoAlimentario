import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards';
import { CreateComponent } from './crear-producto/create.component';
import { ListComponent } from './listar-producto/list.component';
import { UpdateComponent } from './update-producto/update.component';
import { ViewComponent } from './view-producto/view.component';




const routes: Routes = [
  {
    path: 'crearProducto',
    component: CreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listarProductos',
    component: ListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'actualizarProducto',
    component: UpdateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'verProducto',
    component: ViewComponent,
    canActivate: [AuthGuard],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class ProductoModule { }
