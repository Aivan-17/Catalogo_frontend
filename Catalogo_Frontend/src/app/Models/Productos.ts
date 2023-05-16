import { NumberValueAccessor } from "@angular/forms";
import {UsuariosModel} from "./Usuarios";
export class ProductosModel{
  idProducto:number = 0;
  categoria:string = "";
  descripcion:string = "";
  marca:string = "";
  usuario:string = "";
  status:number = 0;
  nombre:string = "";
  imagen:string = "";
  vistas:number = 0;
  idUsuario: UsuariosModel = new UsuariosModel();

}
