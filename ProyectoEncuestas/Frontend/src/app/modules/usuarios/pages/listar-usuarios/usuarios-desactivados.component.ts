import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersInterface } from '@models/usuarios/users.interface';
import { UsuariosService } from '@serv/usuarios.service';

@Component({
  selector: 'app-usuarios-desactivados',
  templateUrl: './usuarios-desactivados.html',
  styleUrls: ['./listar-usuarios.component.css','../../../../app.component.css']
})
export class UsuariosDeactivadosComponent {
  displayedColumns: string[] = ['id', 'opciones', 'name', 'tel','dni','email','creado','actualizado','tipo','sexo'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public page!:number;
  constructor(private usuariosModel: UsuariosService) {
    this.usuariosModel.getUsuariosDesactivados().subscribe((data:UsersInterface[]) => {
      this.dataSource = new MatTableDataSource<UsersInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
  }
}
