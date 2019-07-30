import { Component, OnInit } from '@angular/core';

import { MatDialogRef} from '@angular/material/dialog';

import { Recorrido } from '../../_models/recorrido';

@Component({
  selector: 'app-cargar-recorrido',
  templateUrl: './cargar-recorrido.component.html',
  styleUrls: ['./cargar-recorrido.component.css']
})
export class CargarRecorridoComponent implements OnInit {
  recorrido= new Recorrido();

  constructor(
    public dialogRef: MatDialogRef<CargarRecorridoComponent>,
  ) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
