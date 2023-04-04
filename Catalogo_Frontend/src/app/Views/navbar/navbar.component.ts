import {Component, HostListener} from '@angular/core';
import Swal from "sweetalert2";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor() { }

  ngOnInit(): void {

  }

  @HostListener('window:beforeunload')
  onUnload() {
    const data = new FormData();

    data.append('name', 'abc');
    data.append('location', 'world');
    navigator.sendBeacon('http://www.mysitioweb.com/api/v1/endpoint', data);

    return false;
  }
  alertacierre(){
    Swal.fire({

      title: "¿Cerrar sesion?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: "Sí",
      confirmButtonColor: '#c72828',
      cancelButtonText: "Cancelar",
      cancelButtonColor: '#8e9187',
    }) .then(resultado => {
      if (resultado.value) {
        localStorage.clear();
        localStorage.setItem('token', '');
        localStorage.setItem('username', '');
        window.location.href = "/";
      }
    });
  }
}
