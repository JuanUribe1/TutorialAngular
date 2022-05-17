import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarios(): Usuario[]{
    /* var array: Usuario[] = [];
    this.http.get<Usuario[]>('./assets/fakebackdata/usuarios.json').subscribe(fakebackdata => {
      array = fakebackdata;
    });
    return array; */
    return this.listUsuarios.slice();
  }
  array: Usuario[] = [];
  getUsuariosJSON(): Usuario[]{
    
    this.http.get<Usuario[]>('./assets/fakebackdata/usuarios.json').subscribe(
      fakebackdata => {
        this.array = fakebackdata;
        console.log(this.array);
        return this.array;
      }
    );
    console.log("la primera vez sale vacio: "+this.array)
    return this.array;
  }
  eliminarRegistro(index: number){
    this.listUsuarios.splice(index, 1);
  }

  agregarUsuario(usuario: Usuario){
    this.listUsuarios.unshift(usuario);
  }

  listUsuarios: Usuario[] = [
    {usuario: 'HenryG', nombre: 'Henry', apellido: 'Garcia', sexo: 'Masculino'},
    {usuario: 'FabioB', nombre: 'Fabio', apellido: 'Balanta', sexo: 'Masculino'},
    {usuario: 'JuanU', nombre: 'Juan', apellido: 'Uribe', sexo: 'Masculino'},
    {usuario: 'HenryG', nombre: 'Henry', apellido: 'Garcia', sexo: 'Masculino'},
    {usuario: 'FabioB', nombre: 'Fabio', apellido: 'Balanta', sexo: 'Masculino'},
    {usuario: 'JuanU', nombre: 'Juan', apellido: 'Uribe', sexo: 'Masculino'}
  ];

}
