import {Component, OnInit} from '@angular/core';
import Swal from "sweetalert2";
import {ProductosModel} from "../../Models/Productos";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductoService} from "../../Service/ProductoService";
import {ValoracionService} from "../../Service/ValoracionService";
import {UsuarioService} from "../../Service/UsuarioService";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-lista-admin',
  templateUrl: './lista-admin.component.html',
  styleUrls: ['./lista-admin.component.css']
})
export class ListaAdminComponent implements OnInit {
  Productos: ProductosModel[]=[]
  pm:ProductosModel= new ProductosModel();

  UserForm: FormGroup = new FormGroup({})

  constructor(private router: Router,private route:ActivatedRoute, private productoService:ProductoService, private  valoracion:ValoracionService,
              private  usuarioService:UsuarioService) {
  }

  ngOnInit(): void {

    this.getProductos();

    this.UserForm = new FormGroup({

      busqueda: new FormControl('',[]),


    });

  }


  getProductos(){

    let nom= this.UserForm.value.busqueda;

    if(nom==="" ){
      let dato;
      dato = localStorage.getItem('idUsuario');
      let cc= Number(dato);

      this.productoService.getProdsUs(cc).subscribe(
        data => {
          this.Productos = data;
          console.log(data);

        }
      )

    }
    else {

      this.productoService.getNombre(nom).subscribe(
        data => {
          this.Productos=data;
          console.log(data);

        }
      )

          }

      }












  public saveNombre (): String{
    let bus= this.UserForm.value.busqueda;
    console.log(bus);
    return bus;
  }





  alertaelim( id: number ){
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
        this.productoService.delete(id).subscribe(data=>{
          console.log(data);

        });

      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })


  }





  alertaedit(prod: ProductosModel){
    this.pm=prod
  }
  saveEditedUser(id: number){
    this.productoService.edit(this.pm, this.pm.idProducto ).subscribe(
      data =>{
        console.log(data)
      }
    )
  }




}

