import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Views/login/login.component";
import {ListaAdminComponent} from "./Views/lista-admin/lista-admin.component";
import {ListaClientesComponent} from "./Views/lista-clientes/lista-clientes.component";
import {NavbarComponent} from "./Views/navbar/navbar.component";

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'lista-admin', component: ListaAdminComponent },
  {path: 'lista-cliente', component: ListaClientesComponent },
  {path: 'nav-bar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
