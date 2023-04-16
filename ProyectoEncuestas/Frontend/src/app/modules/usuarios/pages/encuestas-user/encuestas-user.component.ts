import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { EncuestasInterface } from '@models/encuesta/encuesta.interface';
import { UsuariosService } from '@serv/usuarios.service';
import { MatSelect } from '@angular/material/select';
import { DepartamentosUsersInterface } from '@models/encuesta/departamentos-users.interface';
import { MunicipiosUserInterface } from '@models/encuesta/municipios-users.interface';

@Component({
  selector: 'app-encuestas-user',
  templateUrl: './encuestas-user.component.html',
  styleUrls: ['./encuestas-user.component.css', '../../../../app.component.css', '../../../card.css']
})
export class EncuestasUserComponent implements OnInit {
  usuario: string = "";
  departamentos: any;
  municipios: any;
  displayedColumns: string[] = ['id', 'dep', 'mun', 'aldea', 'caserio', 'address', 'hombres', 'mujeres', 'asistencia', 'org', 'exRios', 'cantRios', 'extBosques', 'tipoBosque', 'tipoSuelo', 'tenencia', 'mercado', 'tecno', 'mercado', 'fecha', 'hora', 'user'];
  dataSource: any;
  txtBusqueda: string = "";
  selectDep: any;
  selectMun: any;
  idUser: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('selDep') selDep: MatSelect;
  @ViewChild('selMun') selMun: MatSelect;
  constructor(private usuariosModel: UsuariosService, private dialog: MatDialog, private router: ActivatedRoute) { }
  ngOnInit(): void {
    this.obtenerID();
    this.obtenerEncuestas();
    this.departamentosUser();
    this.selDep.value = "";
  }

  obtenerID() {
    try {
      this.router.params.subscribe(params => {
        this.idUser = params['id'];
      })
    } catch (error) {
      console.log(error);
    }
  }

  obtenerEncuestas(): void {
    try {
      this.usuariosModel.getUsuarioEncuestas(this.idUser).subscribe((data: EncuestasInterface[]) => {
        this.dataSource = new MatTableDataSource<EncuestasInterface>(data);
        this.dataSource.paginator = this.paginator;
        this.usuario = data[0].user;
      })
      this.txtBusqueda = "";
      this.selDep.value = "";
      this.selMun.value = "";
    } catch (error) {
      console.log(error);
    }
  }

  departamentosUser(): void {
    try {
      this.usuariosModel.getDepartamentosUser(this.idUser).subscribe((response: DepartamentosUsersInterface[]) => {
        this.departamentos = response;
      })
    } catch (error) {
      console.log(error);
    }
  }
  //TODO: Metodo para obtener los municipios asignados al usuario
  municipiosUser(id: number, dep: string) {
    this.usuariosModel.getMunicipiosUser(id, dep).subscribe((response: MunicipiosUserInterface[]) => {
      this.municipios = response;
    })
  }
  encuestasByDep(id: string, idUser: number) {
    try {
      this.usuariosModel.getEncuestasDepUser(id, idUser).subscribe((data: EncuestasInterface[]) => {
        this.dataSource = new MatTableDataSource<EncuestasInterface>(data);
        this.dataSource.paginator = this.paginator;
        this.usuario = data[0].user;
      })
      this.txtBusqueda = "";
    } catch (error) {
      console.log(error);
    }
  }
  encuestasByMun(id: string, idUser: number) {
    try {
      this.usuariosModel.getEncuestasMunUser(id, idUser).subscribe((data: EncuestasInterface[]) => {
        this.dataSource = new MatTableDataSource<EncuestasInterface>(data);
        this.dataSource.paginator = this.paginator;
        this.usuario = data[0].user;
      })
      this.txtBusqueda = "";
    } catch (error) {
      console.log(error);
    }
  }

  changeDep(event: any): void {
    try {
      if (this.selDep.value == "") {
        this.obtenerEncuestas();
        this.selMun.value = "";
      } else {
        this.municipiosUser(this.idUser, this.selDep.value);
        this.encuestasByDep(this.selDep.value, this.idUser);
      }
    } catch (error) {
      console.log(error);
    }
  }
  changeMun() {
    try {
      if (this.selMun.value == "") {
        if (this.selDep.value == "") {
          this.obtenerEncuestas();
        }else{
          this.encuestasByDep(this.selDep.value, this.idUser);
        }
      } else {
        this.encuestasByMun(this.selMun.value, this.idUser);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
