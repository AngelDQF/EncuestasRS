import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, ViewChild } from '@angular/core';
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
import { EstructuraUsers } from '@models/encuesta/estructuras-users-interface';
import { EstadosInterface } from '@models/encuesta/estados-encuestas.interface';
import { TecnologicoInterface } from '@models/encuesta/tecnologico-encuestas.interface';
import { MatSelect } from '@angular/material/select';
@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css', '../../../../app.component.css']
})
export class EncuestasComponent implements OnInit {
  /*
  encuestaForm: FormGroup;
  token = this.cookieToken.get('token');
  tokenString: any;
  btnNewSocial:any;
  socialArray: any[] = [];
  title: string = "Encuestas"
  //Variables para los ngIf
  showDep: boolean;
  showMun: boolean;
  showAldea: boolean;
  showCaserio: boolean;
  OrgArray: Array<any> = [""];
  OrgSocialValue: any;
  legalCheck:boolean=true;
  //Declaracion de variables para guardar datos de los services
  sociales: any;
  departamentos: any;
  municipios: any;
  aldeas: any;
  caserios: any;
  bosques: any;
  organizaciones: any;
  suelos: any;
  estructuras: any;
  estados: any;
  niveles: any;
  idSocial:number=0;
  //Declaracion del constructor
  constructor(private encuestasModel: EncuestasService, private cookieToken: CookieService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.activarShows();
    this.encuestaForm = this.initForm();
    this.datosIniciales();
    this.socialArray = [];
  }
  initForm(): FormGroup {
    return this.fb.group({
      selectDepartamentos: ["", [Validators.required]],
      selectMunicipios: ["", [Validators.required]],
      selectAldeas: ["", [Validators.required]],
      selectCaserios: ["", [Validators.required]],
      txtDireccion: ["",
        [
          Validators.required,
          Validators.maxLength(250)
        ]
      ],
      selectOrganizacion: ["", [Validators.required]],
      txtTotalHombres: ["", [Validators.required]],
      txtTotalMujeres: ["", [Validators.required]],
      txtTotalAsistencia: ["", [Validators.required]],
      txtLatitud: ["", [Validators.required]],
      txtLongitud: ["", [Validators.required]],
      selectRios: [1, [Validators.required]],
      txtCantidadRios: ["", [Validators.required]],
      selectBosques: [1, [Validators.required]],
      selectTipoBosque: ["", [Validators.required]],
      selectTiposSuelos: ["", [Validators.required]],
      selectOrgSocial: ["", [Validators.required]],
      checkLegal:["",[Validators.required]],
      txtOrgSociales: ["", [Validators.required]],
      selectEstructuras: ["", [Validators.required]],
      selectEstado: ["", [Validators.required]],
      txtObservacionEstructura: ["",],
      selectNivel: ["", [Validators.required]],
      // orgs: [[], [Validators.required]],
      // txtOrgSociales: this.fb.array([""]),
    })
  }
  datosIniciales() {
    this.tokenString = this.getDecodedAccessToken(this.token);
    this.DepartamentosUser(this.tokenString.id);
    this.organizacionOrganizadora();
    this.organizacionesSociales();
    this.tiposSuelos();
    this.ObtenerEstados();
    this.nivelTecnologico();
    this.ObtenerEstructuras();
    this.encuestaForm.get("txtCantidadRios")?.disable();
    this.encuestaForm.get("selectTipoBosque")?.disable();
    this.encuestaForm.get("checkLegal")?.disable();
  }
  sumaTotalAsistencia() {
    const totalHombres = this.encuestaForm.get("txtTotalHombres")?.value;
    const totalMujeres = this.encuestaForm.get("txtTotalMujeres")?.value;
    this.encuestaForm.patchValue({
      txtTotalAsistencia: totalHombres + totalMujeres
    });
  }
  agregarOrg(term: any) {
    this.socialArray.push({id:(this.idSocial=+this.idSocial),org:this.encuestaForm.value.selectOrgSocial,legal:this.encuestaForm.value.checkLegal});
    console.log(this.socialArray)
    this.encuestaForm.patchValue({
      checkLegal:[""],
    })
  }
  eliminarSocial(index:any){
    this.socialArray.splice(index);
    console.log(this.socialArray)
  }
  obtenerCoordenadas(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.encuestaForm.patchValue({
        txtLatitud: position.coords.latitude,
        txtLongitud: position.coords.longitude
      })
    })
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
  nivelTecnologico() {
    this.encuestasModel.getTecnologico$().subscribe((response: TecnologicoInterface[]) => {
      this.niveles = response;
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
    this.datosIniciales();
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
  ObtenerEstructuras(): void {
    this.encuestasModel.getEstructuras$().subscribe((response: EstructuraUsers[]) => {
      this.estructuras = response;
    })
  }
  ObtenerEstados(): void {
    this.encuestasModel.getEstados$().subscribe((response: EstadosInterface[]) => {
      this.estados = response;
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
  caseriosChange(chan: any): void {
    this.showCaserio = false;
  }
  //Metodos para los txt change
  mujeresChange(chan: any) {
    this.sumaTotalAsistencia();
  }
  hombresChange(chan: any) {
    this.sumaTotalAsistencia();
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
  activarShows() {
    this.showDep = true;
    this.showMun = true;
    this.showAldea = true;
    this.showCaserio = true;
  }
  riosChange(term: any) {
    const opcion = term.target.value;
    if (opcion == 1) {
      this.encuestaForm.patchValue({
        txtCantidadRios: [0]
      })
      this.encuestaForm.get("txtCantidadRios")?.disable();
    } else {
      this.encuestaForm.get("txtCantidadRios")?.enable();
    }
  }
  bosquesChanges(term: any) {
    const opcion = term.target.value;
    if (opcion == 1) {
      this.encuestaForm.patchValue({
        selectTipoBosque: [""]
      })
      this.encuestaForm.get("selectTipoBosque")?.disable();
    } else {
      this.ObtenerBosques();
      this.encuestaForm.get("selectTipoBosque")?.enable();
    }
  }
  onSubmit(): void {
    alert("Hello");
  }
  orgSocialChange(term:any){
    const opcion = term.target.value;
    if (opcion != "") {

      this.encuestaForm.get("checkLegal")?.enable();
    } else {
      this.encuestaForm.patchValue({
        checkLegal:["",[Validators.required]]
      })
      this.encuestaForm.get("checkLegal")?.disable();
    }
  }*/
  //Variables de uso especial
  tokenString: any;
  token = this.cookieToken.get('token');
  EncuestasForm: FormGroup;
  //Todo: Variables para los select de Ubicaciones
  departamentos: DepartamentosUsersInterface[] = [];
  municipios: MunicipiosUserInterface[] = [];
  aldeas: AldeasUserInterface[] = [];
  caserios: CaseriosUserInterface[] = [];
  ngOnInit(): void {
    this.datosIniciales();
  }
  constructor(private fb: FormBuilder, private encuestasModel: EncuestasService, private cookieToken: CookieService) { }
  datosIniciales() {
    this.EncuestasForm = this.initForm();
    this.tokenString = this.getDecodedAccessToken(this.token);
    this.DepartamentosUser(this.tokenString.id);
    this.municipios = [];
    this.aldeas = [];
    this.caserios = [];
  }
  //Metodo para obtener el token
  getDecodedAccessToken(tok: string): any {
    try {
      return jwt_decode(tok);
    } catch (Error) {
      return null;
    }
  }
  //Metodo para inicializar el formulario
  initForm(): FormGroup {
    return this.fb.group({
      selectDep: ["", [Validators.required]],
      selectMun: ["", [Validators.required]],
      selectAldea: ["", [Validators.required]],
      selectCaserio: ["", [Validators.required]],
    });
  }

  //Metodos para los select de Ubicacion Change
  @ViewChild('selDep') selDep: MatSelect;
  @ViewChild('selMun') selMun: MatSelect;
  @ViewChild('selAldea') selAldea: MatSelect;
  @ViewChild('selCaserio') selCaserio: MatSelect;
  //TODO: Metodo para el change del select de departamentos
  changeDep() {
    try {
      if (this.selDep.value == "") {
        this.EncuestasForm.patchValue({
          selectMun: [""],
          selectAldea: ["",],
          selectCaserio: [""],
        })
        this.municipios = [];
      } else {
        this.EncuestasForm.patchValue({
          selectMun: [""],
          selectAldea: ["",],
          selectCaserio: [""],
        })
        this.MunicipiosUser(this.tokenString.id, this.selDep.value)
      }
    } catch (error) {
      console.log(error);
    }
  }
  changeMun() {
    try {
      if (this.selMun.value == "") {
        this.EncuestasForm.patchValue({
          selectAldea: ["",],
          selectCaserio: [""],
        })
        this.aldeas = [];
      } else {
        this.EncuestasForm.patchValue({
          selectAldea: ["",],
          selectCaserio: [""],
        })
        this.AldeasUser(this.selMun.value);
      }
    } catch (error) {
      console.log(error);
    }
  }
  changeAldea() {
    try {
      if (this.selAldea.value == "") {
        this.EncuestasForm.patchValue({
          selectCaserio: [""],
        })
        this.caserios = [];
      } else {
        this.EncuestasForm.patchValue({
          selectCaserio: [""],
        })
        this.CaseriosUser(this.selAldea.value);
      }
    } catch (error) {
      console.log(error);
    }
  }
  //Metodos para traer las ubicaciones de la Api
  //TODO: Metodo para obtener las los departamentos asignados al usuario
  DepartamentosUser(tok: any): void {
    try {
      this.encuestasModel.getDepartamentosUser$(tok).subscribe((response: DepartamentosUsersInterface[]) => {
        this.departamentos = response;
      })
    } catch (error) {
      console.log(error);
    }
  }
  //TODO: Metodo para obtener los municipios asignados al usuario
  MunicipiosUser(id: number, dep: string) {
    this.encuestasModel.getMunicipiosUser$(id, dep).subscribe((response: MunicipiosUserInterface[]) => {
      this.municipios = response;
    })
  }
  //TODO: Metodo para obtener las aldeas asignadas al usuario
  AldeasUser(id: string) {
    this.encuestasModel.getAldeasUser$(id).subscribe((response: AldeasUserInterface[]) => {
      this.aldeas = response;
    })
  }
  CaseriosUser(id: string){
    this.encuestasModel.getCaseriosUser$(id).subscribe((response: CaseriosUserInterface[]) => {
      this.caserios = response;
    })
  }
}
