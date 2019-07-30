import { Component, OnInit } from '@angular/core';

import { Donante } from '../../_models/donante';

@Component({
  selector: 'app-cargar-user-donante',
  templateUrl: './cargar-user-donante.component.html',
  styleUrls: ['./cargar-user-donante.component.css']
})
export class CargarUserDonanteComponent implements OnInit {


  model = new Donante();

  submitted = false;

  onSubmit() { this.submitted = true; }



  constructor() { }

  ngOnInit() {
  }

}
