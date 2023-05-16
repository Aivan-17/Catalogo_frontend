import {Component, OnInit} from '@angular/core';
import {ProductosModel} from "../../Models/Productos";
import {ActivatedRoute, Router} from "@angular/router";
import {ProductoService} from "../../Service/ProductoService";
import {ValoracionService} from "../../Service/ValoracionService";
import {FormControl, FormGroup} from "@angular/forms";
import {ValoracionModel} from "../../Models/Valoracion";
import {UsuariosModel} from "../../Models/Usuarios";
import {UsuarioService} from "../../Service/UsuarioService";

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit{
  Productos: ProductosModel[]=[]
  val: ValoracionModel = new ValoracionModel();
  us: UsuariosModel=new  UsuariosModel();
  prod:ProductosModel = new ProductosModel()
  pprd:ProductosModel = new ProductosModel()
  UserForm: FormGroup = new FormGroup({})
 CalForm: FormGroup = new FormGroup({})
  constructor(private router: Router,private route:ActivatedRoute, private productoService:ProductoService, private  valoracion:ValoracionService,
              private  usuarioService:UsuarioService) {
  }
  ngOnInit(): void {

    this.getProductos();
    this.UserForm = new FormGroup({
          userType: new FormControl('Todo',[]),
          busqueda: new FormControl('',[]),


    });

    this.CalForm = new FormGroup({
     estrellas: new FormControl('0',[]),


    });

    this.getProductos();
  }
  getProductos(){

    let cat=this.saveCategoria();
    let nom=this.saveNombre();
    console.log(cat);
    console.log(nom);

    if(nom!="" ){

      this.productoService.getNombre(nom).subscribe(
        data => {
          this.Productos=data;
          console.log(data);

        }
      )
    }
    else {
      if (cat === "Todo") {
        this.productoService.getProds().subscribe(
          data => {
            this.Productos = data;
            console.log(data);

          }
        )
      } else {
        this.productoService.getCat(cat).subscribe(
          data => {
            this.Productos = data;

          }
        )
      }
    }



  }

  public saveCategoria(): String {
    let cat = this.UserForm.value.userType;
    let bus= this.UserForm.value.busqueda;
    console.log(cat);
    return cat;
  }
  public saveNombre (): String{
  let bus= this.UserForm.value.busqueda;
    this.UserForm.value.userType="";
  console.log(bus);
  return bus;
  }
  info(pr: ProductosModel){
    this.prod=pr;
  }

  public setCal(pm:ProductosModel) {

this.val.idValoracion=0

    let cal = this.CalForm.value.estrellas;
    let dato;
    dato = localStorage.getItem('idUsuario');
let cc= Number(cal);
    console.log(dato);
    console.log(cc);
this.val.calificacion=cc;
this.val.idProducto=pm;
this.us.idUsuario=cc;
this.val.idUsuario=this.us;


    console.log(pm);
    console.log(this.val.idUsuario);

    this.valoracion.save(this.val).subscribe(
      data => {
        this.val = data;
        console.log(data);

      }
    )

  }




}
