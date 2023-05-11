import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {UsuariosModel} from "../Models/Usuarios";
import { Config } from '../api';
@Injectable({
  providedIn: 'root'
})

export class UsuarioService{

  constructor(private http: HttpClient) { }


  saveUser(User: UsuariosModel){
    return this.http.post<any>(Config.apiUrl + '/usuario', User);

  }

  getUsuarios(){  //obtiene todos los usuarios
    return this.http.get<UsuariosModel[]>(Config.apiUrl + '/usuario');

  }

  getUsuario(id: number){ //obtiene por id
    return this.http.get<any>(Config.apiUrl + '/usuario/'+id);

  }
  delete(id: number){
    return this.http.delete<any>(Config.apiUrl + '/usuario/'+id,);

  }
  edit(user: UsuariosModel){
    return this.http.put<any>(Config.apiUrl + '/usuario' , user);

  }
  Login(username: string){ //obtiene por nombre de usuario
    return this.http.get<any>(Config.apiUrl+"/usuario/query2?usuario="+username);
  }
  prioridad(status: number){ //obtiene por prioridad
    return this.http.get<UsuariosModel[]>(Config.apiUrl+"/usuario/query?prioridad="+ status);
  }
}
