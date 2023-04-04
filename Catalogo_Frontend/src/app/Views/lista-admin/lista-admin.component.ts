import { Component } from '@angular/core';
import Swal from "sweetalert2";

@Component({
  selector: 'app-lista-admin',
  templateUrl: './lista-admin.component.html',
  styleUrls: ['./lista-admin.component.css']
})
export class ListaAdminComponent {


  alertaelim( ){
    Swal.fire({
      icon: 'warning',
      title: '¿Estás seguroa de eliminar a estea usuario/a?',
      showConfirmButton: true,
      confirmButtonText: 'ELIMINAR',
      confirmButtonColor: '#3085d6',
      showCancelButton: true,
      cancelButtonText: 'CANCELAR',
      cancelButtonColor: '#d33',
      buttonsStyling: true,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        //this.estadia.delete(id).subscribe(data=>{
         // console.log(data);

       // });

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })


  }

}
