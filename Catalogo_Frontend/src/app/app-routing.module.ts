import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./Views/login/login.component";
import {ListaAdminComponent} from "./Views/lista-admin/lista-admin.component";
import {ListaClientesComponent} from "./Views/lista-clientes/lista-clientes.component";
import {NavbarComponent} from "./Views/navbar/navbar.component";
import {NavbarcComponent} from "./Views/navbarc/navbarc.component";
import {NavbardComponent} from "./Views/navbard/navbard.component";
import {RegistroComponent} from "./Views/registro/registro.component";
import {RegistroProductosComponent} from "./Views/registro-productos/registro-productos.component";
import {DashBoardComponent} from "./Views/dash-board/dash-board.component";

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path: 'lista-admin', component: ListaAdminComponent },
  {path: 'lista-cliente', component: ListaClientesComponent },
  {path: 'nav-bar', component: NavbarComponent},
  {path: 'nav-barc', component: NavbarcComponent},
  {path: 'nav-bard', component: NavbardComponent},

  {path: 'registro', component: RegistroComponent},
  {path: 'registro-producto', component: RegistroProductosComponent },
  {path: 'dashboard', component: DashBoardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
