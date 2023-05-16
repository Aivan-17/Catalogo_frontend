import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UsuariosModel} from "../Models/Usuarios";
import {ProductosModel} from "../Models/Productos";
import {ValoracionModel} from "../Models/Valoracion";


import { Config } from '../api';

@Injectable({
  providedIn: 'root'
})

export class ValoracionService{

  constructor(private http: HttpClient) { }


  save(val: ValoracionModel){
    return this.http.post<any>(Config.apiUrl + '/valoracion', val);
    console.log(val.idValoracion)
  }

  getVal(){  //obtienetodo
    return this.http.get<ValoracionModel>(Config.apiUrl + '/valoracion');

  }

  getvalId(id: number){ //obtiene por id
    return this.http.get<any>(Config.apiUrl + '/valoracion/'+id);

  }
  delete(id: number){
    return this.http.delete<any>(Config.apiUrl + '/valoracion/'+id,);

  }
  edit(user: ValoracionModel, id:number){
    return this.http.put<any>(Config.apiUrl + '/valoracion'+id , user);

  }

}
