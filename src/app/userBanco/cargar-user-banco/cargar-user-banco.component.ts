import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-cargar-user-banco',
  templateUrl: './cargar-user-banco.component.html',
  styleUrls: ['./cargar-user-banco.component.css']
})
export class CargarUserBancoComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  altaUsuarioForm:FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }

}
