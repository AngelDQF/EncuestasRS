import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AsignacionesInterface } from '@models/usuarios/asignaciones.interface';
import { UsersInterface } from '@models/usuarios/users.interface';
import { UsuariosService } from '@serv/usuarios.service';
import { InfoComponent } from '@shared/components';
import { AgregarAsignacionComponent } from '@shared/components/modals/agregar-asignacion/agregar-asignacion.component';
@Component({
  selector: 'app-asignaciones',
  templateUrl: './asignaciones.component.html',
  styleUrls: ['./asignaciones.component.css', '../../../../app.component.css']
})
export class AsignacionesComponent implements OnInit {
  //TODO: Variables para el input de busquedad
  txtBusqueda: string = '';
  //TODO: Variables para los datos generales
  usuarios: any;
  nameTitle: any;
  show:boolean;
  //Datos para la tabla
  displayedColumns: string[] = ['id', 'opciones', 'mun', 'dep'];
  dataSource: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public page!: number;
  constructor(private router: ActivatedRoute, private userModel: UsuariosService, private dialog: MatDialog) { }
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
        if(data[0].id==undefined){
          this.show=false;
        }else{
          this.show=true;
        }
        this.dataSource = new MatTableDataSource<AsignacionesInterface>(data);
        this.dataSource.paginator = this.paginator;
      });
    } catch (error) {
      console.log(error);
    }
  }
  newAsignacion(): void {
    try {
      const dialogRef = this.dialog.open(AgregarAsignacionComponent, {
        width: '500px',
        data: [this.idUser]
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerAsignaciones() });

    } catch (error) {
      this.mensaje("Error", "Ha Ocurrido un Error al Crear la Asignación", 3);
    }
  }
  mensaje(titulo: string, cuerpo: string, tipo: number): void {
    try {
      const dialogRef = this.dialog.open(InfoComponent, {
        width: '500px',
        data: [titulo, cuerpo, tipo]
      });
      dialogRef.afterClosed().subscribe(exc => { this.obtenerAsignaciones() });
    } catch (error) {
      console.log(error);
    }
  }
  buscarTabla() {
    // Filtrar los datos de la tabla en base al valor de búsqueda
    this.dataSource.filter = this.txtBusqueda.trim().toLowerCase();
  }
}
