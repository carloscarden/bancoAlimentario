import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// components
import { AppComponent } from './app.component';

import { HeaderComponent } from './_shared/header/header.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { CargarRecorridoComponent } from './recorrido/cargar-recorrido/cargar-recorrido.component';
import { ListarRecorridosComponent } from './recorrido/listar-recorridos/listar-recorridos.component'
import { PerfilComponent } from './settings/perfil/perfil.component';


// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';

// modules
import { AppRoutingModule } from './app-routing.module';
import { UsersModule } from '../app/users/users.module'
import { DonacionModule } from '../app/donacion/donacion.module';
import { CargarUserDonanteComponent } from './userDonante/cargar-user-donante/cargar-user-donante.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    CargarRecorridoComponent,
    ListarRecorridosComponent,
    CargarUserDonanteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    UsersModule,
    DonacionModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
