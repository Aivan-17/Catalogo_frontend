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
  idUsuario: UsuariosModel = new UsuariosModel();

}
