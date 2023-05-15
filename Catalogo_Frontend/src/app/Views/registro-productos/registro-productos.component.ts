import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UsuarioService} from "../../Service/UsuarioService";
import {ProductoService} from "../../Service/ProductoService";
import {UsuariosModel} from "../../Models/Usuarios";
import {ProductosModel} from "../../Models/Productos";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-registro-productos',
  templateUrl: './registro-productos.component.html',
  styleUrls: ['./registro-productos.component.css']
})
export class RegistroProductosComponent implements OnInit{

  us: UsuariosModel=new  UsuariosModel();
  UserForm: FormGroup = new FormGroup({})

  constructor(private router: Router,private route:ActivatedRoute, private usuariosService: UsuarioService, private productpService:
  ProductoService, private http: HttpClient) { }

  ngOnInit(): void {

    this.UserForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),
      des: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),
      marca: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(20),Validators.pattern('^[a-zA-Z ]*$')]),
file:new FormControl

    },{  });


  }

  save(){
    let user:ProductosModel= new ProductosModel();


    let dato;
    dato = localStorage.getItem('idUsuario');
    let cc= Number(dato);
    console.log(this.UserForm.value)
    user.nombre = this.UserForm.value.name;

    user.marca= this.UserForm.value.marca;
    user.descripcion= this.UserForm.value.des;
    this.us.idUsuario= cc;
    user.idUsuario = this.us;
    console.log(user)
    this.http.post('http://localhost:4200/api/trip', this.UserForm).subscribe(
      (response) =>console.log(response),
      (error) =>console.log(error)
    )
  }



}
