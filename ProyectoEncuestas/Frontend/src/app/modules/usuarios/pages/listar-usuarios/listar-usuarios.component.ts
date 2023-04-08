import { Component, ViewChild } from '@angular/core';
import { UsersInterface } from '@models/usuarios/users.interface';
import { UsuariosService } from '@serv/usuarios.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-listar',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css', '../../../../app.component.css']
})
export class ListarUsuariosComponent {
  displayedColumns: string[] = ['id', 'opciones', 'name', 'tel','dni','email','creado','actualizado','tipo','sexo'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public page!:number;
  constructor(private usuariosModel: UsuariosService) {
    this.usuariosModel.getUsuarios().subscribe((data:UsersInterface[]) => {
      this.dataSource = new MatTableDataSource<UsersInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
  }
}
