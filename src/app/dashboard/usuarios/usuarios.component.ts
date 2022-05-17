import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/interfaces/Usuario';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  displayedColumns: string[] = ['usuario', 'nombre', 'apellido', 'sexo', 'acciones'];
  //dataSource = new MatTableDataSource(this.usuarios);
  //dataSource = new MatTableDataSource(listUsuarios);
  //dataSource = listUsuarios;

  dataSource!: MatTableDataSource<any>;


  resultsLength = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  constructor(private usuarioService: UsuarioService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarUsuarios(){
    this.usuarios = this.usuarioService.getUsuarios();
    //this.usuarios = this.usuarioService.getUsuariosJSON();
    this.dataSource = new MatTableDataSource(this.usuarios);
  }
  
  eliminarUsuario(index: number){
    console.log(index);
    this.usuarioService.eliminarRegistro(index);
    this.cargarUsuarios();

    this._snackBar.open('El usuario fue eliminado con exito', 'Ocultar', {
      duration: 1200
    });
  }

}


/* const listUsuarios: Usuario[] = [
  {usuario: 'HenryG', nombre: 'Henry', apellido: 'Garcia', sexo: 'M'},
  {usuario: 'FabioB', nombre: 'Fabio', apellido: 'Balanta', sexo: 'M'},
  {usuario: 'JuanU', nombre: 'Juan', apellido: 'Uribe', sexo: 'M'},
  {usuario: 'HenryG', nombre: 'Henry', apellido: 'Garcia', sexo: 'M'},
  {usuario: 'FabioB', nombre: 'Fabio', apellido: 'Balanta', sexo: 'M'},
  {usuario: 'JuanU', nombre: 'Juan', apellido: 'Uribe', sexo: 'M'}
]; */