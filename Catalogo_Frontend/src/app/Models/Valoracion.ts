import {ProductosModel} from "./Productos";
import {UsuariosModel} from "./Usuarios";
export class ValoracionModel{
  idValoracion:number = 0;
  calificacion:number = 0;
  status:number = 0;
  idUsuario: UsuariosModel = new UsuariosModel();
  idProducto: ProductosModel = new ProductosModel();
}
