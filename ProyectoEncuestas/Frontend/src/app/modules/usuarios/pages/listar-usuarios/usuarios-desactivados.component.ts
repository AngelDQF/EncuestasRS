import { MatDialog } from '@angular/material/dialog';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UsersInterface } from '@models/usuarios/users.interface';
import { UsuariosService } from '@serv/usuarios.service';
import { DesactivarUserComponent, InfoComponent } from '@shared/components';

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
  constructor(private usuariosModel: UsuariosService,private dialog:MatDialog) {
    this.obtenerUsers();
  }
  activar(id:any) {
    try {
      if(id!==undefined){
      const dialogRef= this.dialog.open(DesactivarUserComponent, {
        width: '400px',
        data: [id,"Activar",1],
      });
      dialogRef.afterClosed().subscribe(exc=>{this.obtenerUsers()});
    }else{
      this.mensaje("Error", "Ha Ocurrido un Error al Desactivar el Grado de Escolaridad", 3);
    }
    } catch (error) {
      console.log(error);
    }
  }
  obtenerUsers(){
    this.usuariosModel.getUsuariosDesactivados().subscribe((data:UsersInterface[]) => {
      this.dataSource = new MatTableDataSource<UsersInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
  }
  mensaje(titulo: string, cuerpo: string, tipo: number): void {
    try {
      this.dialog.open(InfoComponent, {
        width: '500px',
        data: [titulo, cuerpo, tipo]
      });
    } catch (error) {
      console.log(error);
    }
  }
}
