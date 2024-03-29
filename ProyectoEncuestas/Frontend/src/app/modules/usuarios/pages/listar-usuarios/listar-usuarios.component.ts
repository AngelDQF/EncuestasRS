import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersInterface } from '@models/usuarios/users.interface';
import { UsuariosService } from '@serv/usuarios.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DesactivarUserComponent, InfoComponent } from '@shared/components';
import { Observable } from 'rxjs';
import { RestablecerPasswordComponent } from '@shared/components/modals/restablecer-password/restablecer-password.component';
@Component({
  selector: 'app-listar',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css', '../../../../app.component.css', '../../../card.css']
})
export class ListarUsuariosComponent implements OnInit {
  displayedColumns: string[] = ['id', 'opciones', 'name', 'tel', 'dni', 'email', 'creado', 'actualizado', 'tipo', 'sexo'];
  dataSource: any;
  txtBusqueda: string = "";
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public page!: number;
  constructor(private usuariosModel: UsuariosService, private router: Router, private dialog: MatDialog) {

  }
  ngOnInit(): void {
    this.obtenerUsers();
  }
  desactivar(id: number) {
    try {
      if (id !== undefined) {
        const dialogRef = this.dialog.open(DesactivarUserComponent, {
          width: '400px',
          data: [id, "Desactivar", 2],
        });
        dialogRef.afterClosed().subscribe(exc => { this.obtenerUsers() })
      } else {
        this.mensaje("Error", "Ha Ocurrido un Error al Desactivar el Usuario", 3);
      }
    } catch (error) {
      console.log(error);
    }
  }
  restablecer(id: any) {
    try {
      const dialogRef = this.dialog.open(RestablecerPasswordComponent, {
        width: '400px',
        data: [id, "Desactivar", 2],
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerUsers() })
    } catch (error) {
      console.log(error);
    }
  }
  obtenerUsers() {
    this.usuariosModel.getUsuarios().subscribe((data: UsersInterface[]) => {
      this.dataSource = new MatTableDataSource<UsersInterface>(data);
      this.dataSource.paginator = this.paginator;
    })
    this.txtBusqueda = "";
  }
  buscarTabla() {
    //TODO: Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
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
