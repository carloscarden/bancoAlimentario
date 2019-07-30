import { Component, OnInit,Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';


import {Donacion} from '../../_models/donacion'
import {Producto} from '../../_models/producto'


@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  producto=new Producto();

  constructor(
    public dialogRef: MatDialogRef<CrearProductoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Donacion) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

 

}
