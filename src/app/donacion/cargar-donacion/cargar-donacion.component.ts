import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material/dialog';


import {Donacion} from '../../_models/donacion'

import {CrearProductoComponent } from '../../producto/crear-producto/crear-producto.component'


@Component({
  selector: 'app-create-donacion',
  templateUrl: './cargar-donacion.component.html',
  styleUrls: ['./cargar-donacion.component.css']
})
export class CargarDonacionComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];
  donacion= new Donacion();
  submitted = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.donacion.productos=[];
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CrearProductoComponent, {
      width: '250px',
      data: this.donacion
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

      if(result){
        this.donacion.productos.push(result)
      }
    });
  }

  

  onSubmit() { this.submitted = true; }

  newHero() {
    this.donacion = new Donacion();
  }


}
