import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Views/login/login.component";
import {ListaAdminComponent} from "./Views/lista-admin/lista-admin.component";
import {ListaClientesComponent} from "./Views/lista-clientes/lista-clientes.component";
import {NavbarComponent} from "./Views/navbar/navbar.component";
import {NavbarcComponent} from "./Views/navbarc/navbarc.component";
import {RegistroComponent} from "./Views/registro/registro.component";
import {RegistroProductosComponent} from "./Views/registro-productos/registro-productos.component";

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'lista-admin', component: ListaAdminComponent },
  {path: 'lista-cliente', component: ListaClientesComponent },
  {path: 'nav-bar', component: NavbarComponent},
  {path: 'nav-barc', component: NavbarcComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'registro-producto', component: RegistroProductosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
