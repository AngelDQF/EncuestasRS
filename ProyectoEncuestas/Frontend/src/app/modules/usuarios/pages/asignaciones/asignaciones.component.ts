import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AsignacionesInterface } from '@models/usuarios/asignaciones.interface';
import { UsersInterface } from '@models/usuarios/users.interface';
import { UsuariosService } from '@serv/usuarios.service';
import { InfoComponent } from '@shared/components';
@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.css', '../../../../app.component.css']
})
export class AsignacionesComponent implements OnInit {
  usuarios: any;
  nameTitle: any;
  //Datos para la tabla
  displayedColumns: string[] = ['id', 'opciones', 'mun', 'dep'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public page!: number;
  constructor(private router: ActivatedRoute, private userModel: UsuariosService, private dialog:MatDialog) { }
  idUser: any;
  ngOnInit(): void {
    this.obtenerID();
    this.obtenerUser();
    this.obtenerAsignaciones();
  }
  obtenerID() {
    this.router.params.subscribe(params => {
      this.idUser = params['id'];
    })
  }
  obtenerUser() {
    this.userModel.getUsuarioById(this.idUser).subscribe((data: UsersInterface[]) => {
      this.usuarios = data;
      this.nameTitle = this.usuarios[0].name;
    })
  }
  obtenerAsignaciones() {
    try {
      this.userModel.getAsignaciones(this.idUser).subscribe((data: AsignacionesInterface[]) => {
        this.dataSource = new MatTableDataSource<AsignacionesInterface>(data);
        this.dataSource.paginator = this.paginator;
      });
    } catch (error) {
      console.log(error);
    }
  }
  // mensaje() {
  //   try {
  //     const dialogRef= this.dialog.open(InfoComponent, {
  //       width: '500px',
  //     });
  //     dialogRef.afterClosed().subscribe(exc=>{this.obtenerAsignaciones()});
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
