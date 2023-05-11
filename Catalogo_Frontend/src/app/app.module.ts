import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Views/login/login.component';
import { ListaClientesComponent } from './Views/lista-clientes/lista-clientes.component';
import { ListaAdminComponent } from './Views/lista-admin/lista-admin.component';
import { NavbarComponent } from './Views/navbar/navbar.component';
import { NavbarcComponent } from './Views/navbarc/navbarc.component';
import { RegistroComponent } from './Views/registro/registro.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaClientesComponent,
    ListaAdminComponent,
    NavbarComponent,
    NavbarcComponent,
    RegistroComponent,

  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
