import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// services
import { AuthenticationService } from '../../_services';

//models
import { User, Role } from '../../_models';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: User;

  constructor( 
        private router: Router,
        private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  get isLogged() {
    return this.currentUser!=null;
  }


  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  get isDoner() {
    return this.currentUser && this.currentUser.role === Role.Donante;
  }

  get isBanco() {
    return this.currentUser && this.currentUser.role === Role.Banco;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
