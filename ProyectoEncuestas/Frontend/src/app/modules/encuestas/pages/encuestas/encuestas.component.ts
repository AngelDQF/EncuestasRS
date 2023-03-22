import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartamentosUsersInterface } from '@models/encuesta/departamentos-users.interface';
import { EncuestasService } from '@serv/encuestas.service';
import jwt_decode from 'jwt-decode';
import { BosquesInterface } from '@models/administrar/recursos/bosques.interface';
import { OrganizacionesInterface } from '@models/administrar/organizaciones/organizaciones.interface';
import { SuelosInterface } from '@models/administrar/recursos/suelos.interface';
import { MunicipiosUserInterface } from '@models/encuesta/municipios-users.interface';
import { AldeasUserInterface } from '@models/encuesta/aldeas-users.interface';
import { CaseriosUserInterface } from '@models/encuesta/caserios-users.interface';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css', '../../../../app.component.css']
})
export class EncuestasComponent implements OnInit {
  encuestaForm: FormGroup;
  token = this.cookieToken.get('token');
  tokenString: any;
  title: string = "Encuestas"
  //Variables para los ngIf
  showDep: boolean;
  showMun: boolean;
  showAldea: boolean;
  showCaserio: boolean;
  //Declaracion de variables para guardar datos de los services
  sociales: any;
  departamentos: any;
  municipios: any;
  aldeas: any;
  caserios: any;
  bosques: any;
  organizaciones: any;
  suelos: any;
  //Declaracion del constructor
  constructor(private encuestasModel: EncuestasService, private cookieToken: CookieService, private fb: FormBuilder) { }
  ngOnInit(): void {
    this.activarShows();
    this.encuestaForm = this.initForm();
    this.datosIniciales();
  }
  initForm(): FormGroup {
    return this.fb.group({
      selectDepartamentos: ["",],
      selectMunicipios: ["",],
      selectAldeas: ["",],
      selectCaserios: ["",],
      txtDireccion: ["",
        [
          Validators.required,
          Validators.maxLength(250)
        ]
      ],
      selectOrganizacion: ["",],
      txtTotalHombres: ["",],
      txtTotalMujeres: ["",],
      txtTotalAsistencia: ["",],
      txtLatitud: ["",],
      txtLongitud: ["",],
      selectRios: [1,],
      txtCantidadRios: [""],
      selectBosques: [1,],
      selectTipoBosque: ["",],
      selectTiposSuelos: ["",],
      selectOrgSocial: ["",],
      txtOrgSociales: [""],
      // txtOrgSociales: this.fb.array([""]),
    })
  }
  datosIniciales() {
    this.tokenString = this.getDecodedAccessToken(this.token);
    this.ObtenerBosques();
    this.DepartamentosUser(this.tokenString.id);
    this.organizacionOrganizadora();
    this.organizacionesSociales();
    this.tiposSuelos();
  }
  obtenerCoordenadas(): void {
    console.log(this.encuestaForm.get("selectDepartamentos"))
  }
  organizacionOrganizadora() {
    this.encuestasModel.getOrganizacion$().subscribe((response: OrganizacionesInterface[]) => {
      this.organizaciones = response;
    })
  }
  tiposSuelos() {
    this.encuestasModel.getSuelos$().subscribe((response: SuelosInterface[]) => {
      this.suelos = response;
    })
  }
  organizacionesSociales() {
    this.encuestasModel.getOrganizacionesSociales$().subscribe((response: OrganizacionesInterface[]) => {
      this.sociales = response;
    })
  }
  limpiarForm() {
    this.activarShows();
    this.encuestaForm = this.initForm();
  }

  DepartamentosUser(tok: any): void {
    this.encuestasModel.getDepartamentosUser$(tok).subscribe((response: DepartamentosUsersInterface[]) => {
      this.departamentos = response;
    })
  }
  ObtenerBosques(): void {
    this.encuestasModel.getTiposBosques$().subscribe((response: BosquesInterface[]) => {
      this.bosques = response;
    })
  }
  getDecodedAccessToken(tok: string): any {
    try {
      return jwt_decode(tok);
    } catch (Error) {
      return null;
    }
  }
  //Metodos para los select de Ubicacion Change
  departamentosChange(chan: any) {
    this.encuestaForm.patchValue({
      selectMunicipios: [""],
      selectAldeas: ["",],
      selectCaserios: [""],
    })
    this.MunicipiosUser(this.tokenString.id, chan.target.value)
    this.showDep = false;
    this.showMun = true;
    this.showAldea = true;
    this.showCaserio = true;
  }
  municipiosChange(chan: any) {
    this.encuestaForm.patchValue({
      selectAldeas: ["",],
      selectCaserios: [""],
    })
    this.AldeasUser(chan.target.value)
    this.showMun = false;
    this.showAldea = true;
    this.showCaserio = true;
  }
  aldeasChange(chan: any) {
    this.encuestaForm.patchValue({
      selectCaserios: [""],
    })
    this.CaseriosUser(chan.target.value)
    this.showAldea = false;
    this.showCaserio = true;
  }
  caseriosChange(chan:any):void {
    this.showCaserio = false;
  }
  //Metodos para traer las ubicaciones de la Api
  MunicipiosUser(id: number, dep: string) {
    this.encuestasModel.getMunicipiosUser$(id, dep).subscribe((response: MunicipiosUserInterface[]) => {
      this.municipios = response;
    })
  }
  AldeasUser(id: string) {
    this.encuestasModel.getAldeasUser$(id).subscribe((response: AldeasUserInterface[]) => {
      this.aldeas = response;
    })
  }
  CaseriosUser(id: string) {
    this.encuestasModel.getCaseriosUser$(id).subscribe((response: CaseriosUserInterface[]) => {
      this.caserios = response;
    })
  }
  activarShows(){
    this.showDep=true;
    this.showMun=true;
    this.showAldea=true;
    this.showCaserio=true;
  }
  onSubmit(): void {
    alert("Hello");
  }
}
