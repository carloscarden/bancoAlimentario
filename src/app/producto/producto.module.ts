import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { UpdateProductoComponent } from './update-producto/update-producto.component';
import { ViewProductoComponent } from './view-producto/view-producto.component';

import {ProductoRoutingModule} from './producto-routing.module'




@NgModule({
  imports: [
    ProductoRoutingModule
  ],
  exports: [RouterModule],
  declarations: [
    CrearProductoComponent,
    ListarProductoComponent,
    UpdateProductoComponent,
    ViewProductoComponent
  ]
})
export class ProductoModule { }
