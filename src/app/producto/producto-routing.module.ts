import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards';
import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { UpdateProductoComponent } from './update-producto/update-producto.component';
import { ViewProductoComponent } from './view-producto/view-producto.component';




const routes: Routes = [
  {
    path: 'crearProducto',
    component: CrearProductoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listarProductos',
    component: ListarProductoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'actualizarProducto',
    component: UpdateProductoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'verProducto',
    component: ViewProductoComponent,
    canActivate: [AuthGuard],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: []
})

export class ProductoRoutingModule { }
