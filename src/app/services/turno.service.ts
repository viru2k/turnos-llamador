import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { URL_SERVICIOS, PARAMS } from '../config/config';
import { User } from '../models/user.model';
import { UsuarioModulo } from '../models/user-modulo.model';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {

  private url: string  = URL_SERVICIOS;

  constructor(public http: HttpClient) { }

  getProximoNumero(id: number) {
  return this.http.get<any[]>(this.url + 'turnos/llamar/proximo');
  }

  Llamar(sector_usuario_id: string) {
    return this.http.get<any[]>(this.url + 'turnos/llamar/llamar?sector_usuario_id=' + sector_usuario_id);
    }


  LlamarRepetir(sector_usuario_id: string, numero_id: string) {
    return this.http.get<any[]>(this.url + 'turnos/llamar/llamar/repetir?sector_usuario_id=' + sector_usuario_id + '&numero_id=' + numero_id);
}

getListadoPantalla() {
  return this.http.get<any[]>(this.url + 'turnos/llamar/pantalla');
  }

  getSectorByUsuario(usuario_id: string) {
  return this.http.get<any[]>(this.url + 'turnos/usuario/sector?usuario_id=' + usuario_id );
  }

putItem(val: User, id: string) {
//   console.log(this.url + '/'+id);
  console.log(val);
  return this.http.put<User>(this.url + '/' + id, val);
}

postUserMenu(val: any[], user_id: string) {
  console.log(val);
  return this.http.post<User>(this.url + '/menu/add/' + user_id, val);
}

delModulo(id: string) {
  return this.http.delete<string>(this.url + '/menu/ ' + id);
  }

  getUsers() {
    return this.http.get<any>(this.url);
  }

  getUser(id: string) {
    return this.http.get<any>(this.url + '/' + id);
  }

  updUser(id: string, usuario: any) {
    return this.http.put<any>(this.url + '/editar/' + id, usuario);
  }
  EditarUsuarioPassword(id: string, usuario: any) {
    return this.http.put<any>(this.url + '/editar/password/' + id, usuario);
  }
  
  setUser(usuario: any) {
    return this.http.post<any>(this.url + '/crear', usuario);
  }

}
