import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
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
  EncuestasForm: FormGroup;
  //Todo: Variables para los select de Ubicaciones
  departamentos: DepartamentosUsersInterface[] = [];
  municipios: MunicipiosUserInterface[] = [];
  aldeas: AldeasUserInterface[] = [];
  caserios: CaseriosUserInterface[] = [];
  isLinear: boolean = true;
  //TODO: Variables para la junta directiva
  frmM1: FormGroup;
  frmM2: FormGroup;
  frmM3: FormGroup;
  frmM4: FormGroup;
  frmM5: FormGroup;
  cargos: any;
  grados: any;
  ejes: any;
  //TODO: Variables para los identificadores de necesidades
  estados: any;
  estructuras: any
  //TODO: Variables para org locales
  orgLocales: any;
  //TODO: Variables para recursos naturales
  tipoBosque: any;
  //TODO: Variables para nivel tecnologico
  nivel: any;
  //TODO: Variables para tipos de mercados
  mercados: any;
  //TODO: Tipo de tenencia de la tierra
  tenencia: any;
  //TODO: Variables para los tipos de servicios
  servBasicos: any;
  servLocales:any;
  //TODO: Variables para el uso de la tierra
  usosTierra:any;
  ngOnInit(): void {
    this.datosIniciales();
  }
  //TODO: Variables para Organizaciones Sociales Productivas
  sociales: any;
  constructor(private fb: FormBuilder, private encuestasModel: EncuestasService, private cookieToken: CookieService) { }
  datosIniciales() {
    this.EncuestasForm = this.initForm();
    this.tokenString = this.getDecodedAccessToken(this.token);
    this.DepartamentosUser(this.tokenString.id);
    this.municipios = [];
    this.aldeas = [];
    this.caserios = [];
    this.organizacionOrganizadora();
    this.frmM1 = this.initFrmM();
    this.frmM2 = this.initFrmM();
    this.frmM3 = this.initFrmM();
    this.frmM4 = this.initFrmM();
    this.frmM5 = this.initFrmM();
    this.getCargos();
    this.getGrados();
    this.getEjes();
    this.getEstados();
    this.getEstructuras();
    this.getOrgLocales();
    this.getNivelTec();
    this.getMercados();
    this.getTiposBosque();
    this.getServiciosBasicos();
    this.getOrgSociales();
    this.getTenenciasTierra();
    this.getUsosTierra();
    this.getServiciosLocales();
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
      txtAddress: ["", [Validators.required]],
      txtLongitud: ["", [Validators.required]],
      txtLatitud: ["", [Validators.required]],
      identificadores: this.fb.array([]),
      selectNivelTec: ["", [Validators.required]],
      txtCantRios: ["", [Validators.required]],
      selectBosque: ["", [Validators.required]],
      txtExportacion: ["", [Validators.required]],
      txtImportacion: ["", [Validators.required]],
      selectActividades: ["", [Validators.required]],
      selectSociales: ["", [Validators.required]],
    });
  }
  initFrmM(): FormGroup {
    return this.fb.group({
      txtNombre: ["", [Validators.required]],
      txtDNI: ["", [Validators.required, Validators.minLength(13), Validators.maxLength(13)]],
      txtEdad: ["", [Validators.required]],
      txtTelefono: ["", [Validators.required]],
      selectSexo: ["", [Validators.required]],
      selectCargo: ["", [Validators.required]],
      selectNivel: ["", [Validators.required]],
      selectEje: ["", [Validators.required]],
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
  getOrgLocales() {
    this.encuestasModel.getOrgLocales$().subscribe((response: OrganizacionesInterface[]) => {
      this.orgLocales = response;
    })
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
  getTenenciasTierra() {
    this.encuestasModel.getTenenciaTierras$().subscribe((response: TenenciaTierraInterface[]) => {
      this.tenencia = response;
    });
  }
  getServiciosLocales(){
    try{
    this.encuestasModel.getSerLocales$().subscribe((response: ServiciosInterface[]) => {
      this.servLocales = response;
    });
    }catch(error){
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
}
