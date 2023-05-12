import {Component, OnInit} from '@angular/core';
import {ProductosModel} from "../../Models/Productos";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductoService} from "../../Service/ProductoService";

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit{
  Productos: ProductosModel[]=[]


  constructor(private router: Router,private route:ActivatedRoute, private productoService:ProductoService ) {
  }
  ngOnInit(): void {
    let dato;
    dato = localStorage.getItem('idUsuario');

    console.log(dato);
    this.getProductos();
  }
  getProductos(){
    this.productoService.getProds().subscribe(
      data => {
        this.Productos=data;

      }
    )


  }

}
