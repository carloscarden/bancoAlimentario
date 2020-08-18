import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CargarRecorridoComponent } from '../cargar-recorrido/cargar-recorrido.component';


@Component({
  selector: 'app-ver-carga-recorridos',
  templateUrl: './ver-carga-recorridos.component.html',
  styleUrls: ['./ver-carga-recorridos.component.css']
})
export class VerCargaRecorridosComponent implements OnInit {
  recorridos = [];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CargarRecorridoComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);

      if (result) {
        this.recorridos.push(result);
      }
    });
  }

}
