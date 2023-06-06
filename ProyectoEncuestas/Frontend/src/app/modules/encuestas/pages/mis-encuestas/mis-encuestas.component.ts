import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSelect } from '@angular/material/select';
import { EncuestasService } from '@serv/encuestas.service';
import { CookieService } from 'ngx-cookie-service';
import jwt_decode from 'jwt-decode';
import { MatTableDataSource } from '@angular/material/table';
import { EncuestasInterface } from '@models/encuesta/encuesta.interface';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DepartamentosUsersInterface } from '@models/encuesta/departamentos-users.interface';
import { UsuariosService } from '@serv/usuarios.service';
import { UsersInterface } from '@models/usuarios/users.interface';

@Component({
  selector: 'app-mis-encuestas',
  templateUrl: './mis-encuestas.component.html',
  styleUrls: ['./mis-encuestas.component.css', '../../../../app.component.css', '../../../card.css']
})
export class MisEncuestasComponent implements OnInit {
  usuario: string = "";
  departamentos: any;
  municipios: any;
  displayedColumns: string[] = ['id','opciones','caserio', 'mun','dep'];
  dataSource: any;
  txtBusqueda: string = "";
  selectDep: any;
  idUser: any;
  selectMun: any;
  token:any;
  frmSelects:FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild('selDep') selDep: MatSelect;
  @ViewChild('selMun') selMun: MatSelect;
  constructor(private encuestasModel: EncuestasService, private dialog: MatDialog, private cookie:CookieService, private fb:FormBuilder,private userModel:UsuariosService) { 
    this.token = (this.getDecodedAccessToken(this.cookie.get('token'))).id;
    this.frmSelects = this.initForm();
    this.getUser(this.getUserID());
  }
  ngOnInit(): void {
    this.obtenerEncuestas();
    this.departamentosUser();
    this.departamentosUser();
  }
  initForm():FormGroup{
    return this.fb.group({
      selectDep: [""],
      selectMun: [""]
    })
  }
  getUserID() {
    try {
      return this.idUser = (this.getDecodedAccessToken(this.cookie.get('token'))).id;
    } catch (error) {
      console.log("Error al buscar el id del usuario");
    }
  }
  getUser(id: any) {
    try {
      this.userModel.getUsuarioById(id).subscribe((data: UsersInterface[]) => {
        this.usuario=data[0].name;
      })
    } catch (error) {
      console.log("usuario no encontrado");
    }
  }
  obtenerEncuestas(): void {
    try {
      this.encuestasModel.getUsuarioEncuestas$(this.token).subscribe((data:any)=>{
        this.dataSource = new MatTableDataSource<EncuestasInterface>(data);
        this.dataSource.paginator = this.paginator;
        console.log(data);
      })
    } catch (error) {
      console.log(error);
    }
  }

  departamentosUser(): void {
    try {
      this.encuestasModel.getDepartamentosUser$(this.token).subscribe((response: DepartamentosUsersInterface[]) => {
        this.departamentos = response;
      })
    } catch (error) {
      console.log(error);
    }
  }
  //TODO: Metodo para obtener los municipios asignados al usuario
  municipiosUser(id: number, dep: string):void {


  }

  changeDep(event: any): void {
    try {
      if (this.frmSelects.value.selectDep?.value == "") {
        this.obtenerEncuestas();
        this.frmSelects.value.selectMun.value = "";
      } else {
        this.municipiosUser(this.token, this.selDep.value);
        this.encuestasByDep(this.selDep.value, this.token);
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
          this.encuestasByDep(this.selDep.value, this.token);
        }
      } else {
        this.encuestasByMun(this.selMun.value, this.token);
      }
    } catch (error) {
      console.log(error);
    }
  }
  encuestasByDep(id: string, token: number) {
    try {
      this.encuestasModel.getEncuestasDepUser$(id, token).subscribe((data: EncuestasInterface[]) => {
        this.dataSource = new MatTableDataSource<EncuestasInterface>(data);
        this.dataSource.paginator = this.paginator;
        this.usuario = data[0].user;
      })
      this.txtBusqueda = "";
    } catch (error) {
      console.log(error);
    }
  }
  encuestasByMun(id: string, token: number) {
    try {
      this.encuestasModel.getEncuestasMunUser$(id, token).subscribe((data: EncuestasInterface[]) => {
        this.dataSource = new MatTableDataSource<EncuestasInterface>(data);
        this.dataSource.paginator = this.paginator;
        this.usuario = data[0].user;
      })
      this.txtBusqueda = "";
    } catch (error) {
      console.log(error);
    }
  }

  getDecodedAccessToken(tok: string): any {
    try {
      return jwt_decode(tok);
    } catch (Error) {
      return null;
    }
  }
  showBoton(id: number){
    if(id ==null || id == undefined){
      return false;
    }else{
      return true;
    }
  }
}
