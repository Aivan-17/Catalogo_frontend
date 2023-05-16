import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UsuariosModel} from "../Models/Usuarios";
import { Config } from '../api';
import {ProductosModel} from "../Models/Productos";
@Injectable({
  providedIn: 'root'
})

export class ProductoService{

  constructor(private http: HttpClient) { }



  saveProducSI(Prod: ProductosModel){ // guarda imagen y lo demas
    return this.http.post<any>(Config.apiUrl + '/producto/guardar', Prod);

  }

  saveProduc(Prod: ProductosModel, img: String){ // guarda imagen y lo demas
    return this.http.post<any>(Config.apiUrl + '/producto/query?image='+ img, Prod);

  }

  saveImg(Prod: ProductosModel, img: String){  //guarda solo imagen
    return this.http.post<any>(Config.apiUrl + '/producto/image?image='+ img, Prod);

  }

  getProds(){  //obtiene todos los productos
    return this.http.get<ProductosModel[]>(Config.apiUrl + '/producto');

  }
  getProdsUs(id: number){  //obtiene todos los productos por usuario
    return this.http.get<ProductosModel[]>(Config.apiUrl + '/producto/usuario/'+id);

  }

  getProd(id: number){ //obtiene por id
    return this.http.get<any>(Config.apiUrl + '/producto/'+id);

  }
  getMarca(marca:String){ //obtiene por marca
    return this.http.get<any>(Config.apiUrl + '/producto/marca?marca='+marca);

  }
  getNombre(nombre:String){ //obtiene por nombre
    return this.http.get<any>(Config.apiUrl + '/producto/nombre?nombre='+nombre);

  }
  getCat(nombre:String){ //obtiene por categoria
    return this.http.get<any>(Config.apiUrl + '/producto/categoria?categoria='+nombre);

  }
  getImg(nombre:String){ //obtiene solo img
    return this.http.get<any>(Config.apiUrl + '/producto/image/'+nombre);

  }


  delete(id: number){
    return this.http.delete<any>(Config.apiUrl + '/producto/'+id);

  }
  edit(user: ProductosModel, id: number){
    return this.http.put<any>(Config.apiUrl + '/producto/'+id , user);

  }
  saveVista(user: ProductosModel, id: number){
    return this.http.put<any>(Config.apiUrl + '/producto/vista/'+id, user );
  }

}
