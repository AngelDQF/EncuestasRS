import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
import { CargosInterface } from '@models/administrar/junta/cargos.interface';
import { EscolaridadInterface } from '@models/administrar/junta/escolaridad.interface';
import { EjesInterface } from '@models/administrar/junta/ejes.interface';
import { EstructurasInterface } from '@models/administrar/requerimientos/estructuras.interface';
import { MercadosInterface } from '@models/administrar/requerimientos/mercados.interface';
import { ServiciosInterface } from '@models/administrar/servicios/servicios.interface';
import { TenenciaTierraInterface } from '@models/administrar/requerimientos/tenencia.interface';
import { UsosTierraInterface } from '@models/administrar/requerimientos/usos-tierra.interface';
import { InfoComponent } from '@shared/components';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css', '../../../../app.component.css']
})
export class EncuestasComponent implements OnInit {
  //Variables de uso especial
  tokenString: any;
  icon: boolean = true;
  organizaciones: any;
  token = this.cookieToken.get('token');
  tokenTipo: any;
  EncuestasForm: FormGroup;
  //Todo: Variables para los select de Ubicaciones
  departamentos: DepartamentosUsersInterface[] = [];
  municipios: MunicipiosUserInterface[] = [];
  aldeas: AldeasUserInterface[] = [];
  caserios: CaseriosUserInterface[] = [];
  isLinear: boolean = false;
  //TODO: Variables para la junta directiva
  cargos: any;
  grados: any;
  ejes: any;
  //TODO: Variables para los identificadores de necesidades
  estados: any;
  estructuras: any
  idEncuesta: any;

  //TODO: Variables para recursos naturales
  tipoBosque: any;
  //TODO: Variables para nivel tecnologico
  nivel: any;
  //TODO: Variables para financiamientos
  fuentes: any;
  tiposF: any;
  //TODO: Variables para tipos de mercados
  mercados: any;
  //TODO: Tipo de tenencia de la tierra
  tenencia: any;
  //TODO: Variables para los tipos de servicios
  servBasicos: any;
  servLocales: any;
  //TODO: Variables para el uso de la tierra
  usosTierra: any;
  //TODO: Variables para los tipos de suelos
  suelos: any;
  showBoton: boolean = true;
  ngOnInit(): void {
    this.datosIniciales();
  }
  //TODO: Variables para Organizaciones Sociales Productivas
  sociales: any;
  constructor(private fb: FormBuilder, private encuestasModel: EncuestasService, private cookieToken: CookieService, private dialog: MatDialog) {
    this.tokenTipo = (this.getDecodedAccessTokenTipo(this.cookieToken.get('token'))).tipo;
    if (this.tokenTipo == 2) {
      this.showBoton = true;
    } else if (this.tokenTipo == 1) {
      this.showBoton = false;
    }
  }
  getDecodedAccessTokenTipo(tok: string): any {
    try {
      return jwt_decode(tok);
    } catch (Error) {
      return null;
    }
  }
  datosIniciales() {
    this.EncuestasForm = this.initForm();
    this.tokenString = this.getDecodedAccessToken(this.token);
    this.DepartamentosUser(this.tokenString.id);
    this.municipios = [];
    this.aldeas = [];
    this.caserios = [];
    this.organizacionOrganizadora();
    this.getCargos();
    this.getGrados();
    this.getEjes();
    this.getEstados();
    this.getEstructuras();
    this.getNivelTec();
    this.getMercados();
    this.getTiposBosque();
    this.getServiciosBasicos();
    this.getOrgSociales();
    this.getTenenciasTierra();
    this.getUsosTierra();
    this.getServiciosLocales();
    this.getTiposSuelo();
    this.getFuentes();
    this.getTiposFinanciamiento();
    this.ckRiosChange();
    this.ckBosquesChange();
  }
  //Metodo para obtener el token
  getDecodedAccessToken(tok: string): any {
    try {
      return jwt_decode(tok);
    } catch (Error) {
      return null;
    }
  }
  get txtCantRios() {
    return this.EncuestasForm.get('txtCantRios') as FormControl;
  }
  get selectBosque() {
    return this.EncuestasForm.get('selectBosque') as FormControl;
  }
  ckRiosChange(): void {
    let { checkRios } = this.EncuestasForm.value
    if (checkRios) {
      this.txtCantRios.enable();
      this.EncuestasForm.patchValue({
        txtCantRios:[""]
      })
    } else if (!checkRios) {
      this.txtCantRios.disable();
      this.EncuestasForm.patchValue({
        txtCantRios:[0]
      })
    }
  }
  ckBosquesChange(): void {
    let { checkBosques } = this.EncuestasForm.value
    if (checkBosques) {
      this.selectBosque.enable();
    } else if (!checkBosques) {
      this.selectBosque.disable();
      this.EncuestasForm.patchValue({
        selectBosque:[1]
      })
    }
  }
  //Metodo para inicializar el formulario
  initForm(): FormGroup {
    return this.fb.group({
      selectDep: ["", [Validators.required]],
      selectMun: ["", [Validators.required]],
      selectAldea: ["", [Validators.required]],
      selectCaserio: ["", [Validators.required]],
      txtAddress: ["", [Validators.required]],
      selectOrgReunion: ["", [Validators.required]],
      txtHombres: ["", [Validators.required,Validators.min(0)]],
      txtMujeres: ["", [Validators.required,Validators.min(0)]],
      txtLongitud: ["", [Validators.required]],
      txtLatitud: ["", [Validators.required]],
      checkRios: [false, [Validators.required]],
      txtCantRios: ["", [Validators.required,Validators.min(0)]],
      checkBosques: [false, [Validators.required]],
      selectBosque: [1, [Validators.required]],
      selectSuelos: ["", [Validators.required]],
      selectTenencia: ["", [Validators.required]],
      selectNivelTec: ["", [Validators.required]],
      selectOrgs: [[], [Validators.required]],
      selectLocales: [[], [Validators.required]],
      selectBasicos: [[], [Validators.required]],
      txtExportacion: ["", [Validators.required]],
      txtImportacion: ["", [Validators.required]],
      selectActividades: [[], [Validators.required]],
      selectMercado: ["", [Validators.required]],
      identificadores: this.fb.array([]),
      financiamientos: this.fb.array([]),
      junta: this.fb.array([]),
    });
  }
  //Metodos para los select de Ubicacion Change
  @ViewChild('selDep') selDep: MatSelect;
  @ViewChild('selMun') selMun: MatSelect;
  @ViewChild('selAldea') selAldea: MatSelect;
  @ViewChild('selCaserio') selCaserio: MatSelect;
  @ViewChild('selOrg') selOrg: MatSelect;
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
  organizacionOrganizadora() {
    this.encuestasModel.getOrganizaciones$().subscribe((response: OrganizacionesInterface[]) => {
      this.organizaciones = response;
    })
  }
  getFuentes() {
    try {
      this.encuestasModel.getFuentesFinanciamiento$().subscribe((response: OrganizacionesInterface[]) => {
        this.fuentes = response;
      })
    } catch (error) {
      console.log(error);
    }
  }
  getTiposFinanciamiento() {
    try {
      this.encuestasModel.getTiposFinanciamiento$().subscribe((response: OrganizacionesInterface[]) => {
        this.tiposF = response;
      })
    } catch (error) {
      console.log(error);
    }
  }
  getTiposBosque() {
    this.encuestasModel.getTiposBosques$().subscribe((response: BosquesInterface[]) => {
      this.tipoBosque = response;
    })
  }
  getCargos() {
    try {
      this.encuestasModel.getCargos$().subscribe((response: CargosInterface[]) => {
        this.cargos = response;
      })
    } catch (error) {
      console.log(error);
    }
  }
  getGrados() {
    try {
      this.encuestasModel.getGrados$().subscribe((response: EscolaridadInterface[]) => {
        this.grados = response;
      })
    } catch (error) {
      console.log(error);
    }
  }
  getEjes() {
    try {
      this.encuestasModel.getEjes$().subscribe((response: EjesInterface[]) => {
        this.ejes = response;
      })
    } catch (error) {
      console.log(error);
    }
  }
  getEstados() {
    try {
      this.encuestasModel.getEstados$().subscribe((response: EstadosInterface[]) => {
        this.estados = response;
      })
    } catch (error) {
      console.log(error);
    }
  }
  getEstructuras() {
    try {
      this.encuestasModel.getEstructuras$().subscribe((response: EstructurasInterface[]) => {
        this.estructuras = response;
      })
    } catch (error) {
      console.log(error);
    }
  }
  getNivelTec() {
    try {
      this.encuestasModel.getTecnologico$().subscribe((response: TecnologicoInterface[]) => {
        this.nivel = response
      }
      );
    } catch (error) {
      console.log(error)
    }
  }
  getMercados() {
    try {
      this.encuestasModel.getMercados$().subscribe((response: MercadosInterface[]) => {
        this.mercados = response;
      })
    } catch (error) {
      console.log(error)
    }
  }
  getServiciosBasicos() {
    try {
      this.encuestasModel.getSerBasicos$().subscribe((response: ServiciosInterface[]) => {
        this.servBasicos = response;
      });
    } catch (error) {
      console.log(error);
    }
  }
  getOrgSociales() {
    try {
      this.encuestasModel.getOrganizacionesSociales$().subscribe((response: OrganizacionesInterface[]) => {
        this.sociales = response;
      });
    } catch (error) {
      console.log(error);
    }
  }
  getTiposSuelo() {
    try {
      this.encuestasModel.getSuelos$().subscribe((response: SuelosInterface[]) => {
        this.suelos = response;
      });
    } catch (error) {
      console.log(error);
    }
  }
  getTenenciasTierra() {
    this.encuestasModel.getTenenciaTierras$().subscribe((response: TenenciaTierraInterface[]) => {
      this.tenencia = response;
    });
  }
  getServiciosLocales() {
    try {
      this.encuestasModel.getSerLocales$().subscribe((response: ServiciosInterface[]) => {
        this.servLocales = response;
      });
    } catch (error) {
      console.log(error);
    }
  }
  getUsosTierra() {
    try {
      this.encuestasModel.getUsosTierra$().subscribe((response: UsosTierraInterface[]) => {
        this.usosTierra = response;
      });
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
  CaseriosUser(id: string) {
    this.encuestasModel.getCaseriosUser$(id).subscribe((response: CaseriosUserInterface[]) => {
      this.caserios = response;
    })
  }
  obtenerUbicacion() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.EncuestasForm.patchValue({
        txtLatitud: position.coords.latitude,
        txtLongitud: position.coords.longitude
      })
    })
  }
  //Metodos para el form array de frmIdentificadores
  get identificadores(): FormArray {
    return this.EncuestasForm.get('identificadores') as FormArray;
  }
  get financiamientos(): FormArray {
    return this.EncuestasForm.get('financiamientos') as FormArray;
  }
  get junta(): FormArray {
    return this.EncuestasForm.get('junta') as FormArray;
  }
  agregarJunta() {
    // Agregar un FormGroup con los campos requeridos como controles
    this.junta.push(this.fb.group({
      txtNombre: ['', [Validators.required]],
      txtDNI: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      txtEdad: ['', [Validators.required,Validators.min(0)]],
      txtTelefono: ['', [Validators.required]],
      selectSexo: ['', [Validators.required]],
      selectCargo: ['', [Validators.required]],
      selectNivel: ['', [Validators.required]],
      selectEje: ['', [Validators.required]],
    }));
  }
  eliminarJunta(index: number) {
    // Eliminar el miembro en el índice especificado
    this.junta.removeAt(index);
  }
  agregarIdentificador() {
    // Agregar un FormGroup con los campos requeridos como controles
    this.identificadores.push(this.fb.group({
      selectEstructura: ['', Validators.required],
      selectEstado: ['', Validators.required],
      observacion: ['']
    }));
  }
  eliminarIdentificador(index: number) {
    // Eliminar el miembro en el índice especificado
    this.identificadores.removeAt(index);
  }
  agregarFinanciamiento() {
    // Agregar un FormGroup con los campos requeridos como controles
    this.financiamientos.push(this.fb.group({
      selectTipo: ['', Validators.required],
      selectFuente: ['', Validators.required],
      txtMarco: ['']
    }));
  }
  eliminarFinanciamiento(index: number) {
    // Eliminar el miembro en el índice especificado
    this.financiamientos.removeAt(index);
  }

  async enviarEncuesta() {
    try {
      this.encuestasModel.postMesa$(this.selCaserio.value).subscribe((data: any) => {
        this.agregarJuntaMesa(data[0].id);
        this.postEncuesta(data[0].id);
      })
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  postEncuesta(mesa: number) {
    let { txtAddress, selectOrgReunion, txtHombres, txtMujeres, checkRios, txtCantRios, checkBosques, selectBosque, selectSuelos, selectTenencia, selectNivelTec, selectMercado } = this.EncuestasForm.value
    let total = parseInt(txtHombres) + parseInt(txtMujeres);
    let estRios: string;
    let estBosques: string;
    if (checkRios) {
      estRios = 'Si';
    } else {
      estRios = 'No';
    }
    if (checkBosques) {
      estBosques = 'Si';
    } else {
      estBosques = 'No';
    }
    if(txtCantRios=="" || txtCantRios==undefined) {
      txtCantRios=0;
    }
    this.encuestasModel.postEncuesta$(txtHombres, txtMujeres, total, this.selDep.value, this.selMun.value, this.selAldea.value, this.selCaserio.value, txtAddress, selectOrgReunion, estRios, txtCantRios, estBosques, selectBosque, selectSuelos, selectTenencia, selectMercado, selectNivelTec, this.tokenString.id, mesa).subscribe((data: any) => {
      this.idEncuesta = data.mensaje;
      if (this.idEncuesta !== "error") {
        this.agregarDetalles();
      } else {
        this.mensaje("Error", "Error al crear la encuesta", 3);
      }
    })
  }
  agregarDetalles() {
    try {
      let { txtLongitud, txtLatitud, selectOrgs, txtExportacion, txtImportacion, selectBasicos, selectLocales, selectActividades, identificadores, junta, financiamientos } = this.EncuestasForm.value;
      //this.agregarJuntaDirectiva(this.idEncuesta);
      this.encuestasModel.postGeoUbicacion$(this.idEncuesta, txtLongitud, txtLatitud).subscribe();
      selectOrgs.forEach((element: number) => {
        this.encuestasModel.postOrgs$(this.idEncuesta, element).subscribe()
      });
      this.encuestasModel.postImportacion$(this.idEncuesta, txtImportacion).subscribe();
      this.encuestasModel.postExportacion$(this.idEncuesta, txtExportacion).subscribe();

      selectLocales.forEach((element: number) => {
        this.encuestasModel.postServiciosLocales$(this.idEncuesta, element).subscribe()
      });
      selectBasicos.forEach((element: number) => {
        this.encuestasModel.postServiciosBasicos$(this.idEncuesta, element).subscribe()
      });
      selectActividades.forEach((element: number) => {
        this.encuestasModel.postUsosTierra$(this.idEncuesta, element).subscribe();
      });
      identificadores.forEach((element: any) => {
        this.encuestasModel.postRequerimientos$(this.idEncuesta, element.selectEstructura, element.selectEstado, element.observacion).subscribe();
      });
      junta.forEach((element: any) => {
        this.encuestasModel.postJunta$(this.idEncuesta, element.selectCargo, element.selectEje, element.txtDNI, element.txtNombre, element.txtTelefono, element.selectSexo, element.txtEdad, element.selectNivel).subscribe();
      });
      financiamientos.forEach((element: any) => {
        this.encuestasModel.postFinanciamiento$(this.idEncuesta, element.selectTipo, element.selectFuente, element.txtMarco).subscribe();
      });
      this.mensaje("Información", "Encuesta Agregada Exitosamente", 2);
      this.datosIniciales();
    } catch (error) {
      console.log(error);
    }
  }
  agregarJuntaMesa(id:number){
    let { junta } = this.EncuestasForm.value;
    junta.forEach((element: any) => {
      this.encuestasModel.postJuntaMesa$(id, element.selectCargo, element.selectEje, element.txtDNI, element.txtNombre, element.txtTelefono, element.selectSexo, element.txtEdad, element.selectNivel).subscribe();
    });
  }
  mensaje(titulo: string, cuerpo: string, tipo: number): void {
    try {
      const dialogRef = this.dialog.open(InfoComponent, {
        width: '500px',
        data: [titulo, cuerpo, tipo]
      });
      dialogRef.afterClosed().subscribe(exc => { this.datosIniciales() });
    } catch (error) {
      console.log(error);
    }
  }
}