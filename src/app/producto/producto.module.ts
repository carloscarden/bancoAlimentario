import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';


import { CrearProductoComponent } from './crear-producto/crear-producto.component';
import { ListarProductoComponent } from './listar-producto/listar-producto.component';
import { UpdateProductoComponent } from './update-producto/update-producto.component';
import { ViewProductoComponent } from './view-producto/view-producto.component';

import {ProductoRoutingModule} from './producto-routing.module';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';






@NgModule({
  imports: [
    ProductoRoutingModule,
    MatInputModule,
    MatDialogModule,
    CommonModule
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
