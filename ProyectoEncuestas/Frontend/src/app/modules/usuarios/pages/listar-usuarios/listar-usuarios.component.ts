import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersInterface } from '@models/usuarios/users.interface';
import { UsuariosService } from '@serv/usuarios.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DesactivarUserComponent } from '@shared/components';
@Component({
  selector: 'app-listar',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css', '../../../../app.component.css','../../../card.css']
})
export class ListarUsuariosComponent implements OnInit{
  displayedColumns: string[] = ['id', 'opciones', 'name', 'tel','dni','email','creado','actualizado','tipo','sexo'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public page!:number;
  constructor(private usuariosModel: UsuariosService,private router:Router, private dialog:MatDialog) {

  }
  ngOnInit(): void {
    this.obtenerUsers();
  }
  desactivar(id:any) {
    try {
       this.dialog.open(DesactivarUserComponent, {
        width: '400px',
        data: [id,"Desactivar",2],
      },
   );
    } catch (error) {
      console.log(error);
    }
  }
  obtenerUsers(){
    this.usuariosModel.getUsuarios().subscribe((data:UsersInterface[]) => {
      this.dataSource = new MatTableDataSource<UsersInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
  }
}
