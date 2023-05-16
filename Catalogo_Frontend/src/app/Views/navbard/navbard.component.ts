import { Component } from '@angular/core';
import Swal from "sweetalert2";

@Component({
  selector: 'app-navbard',
  templateUrl: './navbard.component.html',
  styleUrls: ['./navbard.component.css']
})
export class NavbardComponent {
  constructor() { }

  ngOnInit(): void {

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
