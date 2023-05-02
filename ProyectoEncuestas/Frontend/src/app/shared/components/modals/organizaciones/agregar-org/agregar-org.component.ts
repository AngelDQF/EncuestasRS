import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControlName, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { OrganizacionesInterface } from '@models/administrar/organizaciones/organizaciones.interface';
import { OrganizacionesService } from '@serv/organizaciones.service';
import { InfoComponent } from '../../info/info.component';
import { TiposOrgInterface } from '@models/administrar/organizaciones/tipos-org.interface';

@Component({
  selector: 'app-agregar-org',
  templateUrl: './agregar-org.component.html',
  styleUrls: ['../../modals.css', '../../../../../app.component.css']
})
export class AgregarOrgComponent implements OnInit {
  //0=>tipo,1=ID,2=
  botonName: string;
  btnClass: string;
  showTitle: boolean;
  label: string;
  nombre: any;
  showInputTipo: boolean;
  showSelects: boolean;
  showInput: boolean;
  title: any;
  tipos: any;
  frmOrganizaciones: FormGroup;
  constructor(private dialogoRef: MatDialogRef<AgregarOrgComponent>, private dialog: MatDialog, private orgService: OrganizacionesService, @Inject(MAT_DIALOG_DATA) public data: Array<any>, private fb: FormBuilder) {
    if (this.data[2] === "org") {
      if (this.data[0] == 1) {
        this.showInputTipo = false;
        this.showSelects = true;
        this.showInput = true;
        this.showTitle = false;
        this.title = "Agregar Organización";
        this.botonName = "Guardar";
        this.btnClass = "btnGuardar";
        this.label = "Ingrese la Organización";
      } else if (this.data[0] == 2) {
        this.getOrganizacion(data[1]);
        this.showTitle = true;
        this.showInputTipo = false;
        this.showInput = true;
        this.title = "Editar Organización";
        this.botonName = "Editar";
        this.btnClass = "btnEditar";
        this.showSelects = false;
        this.label = "Nuevo nombre";
      } else {
        this.title = "Editar Datos Organización";
        this.getOrganizacion(data[1]);
        this.showInputTipo = false;
        this.showTitle = false;
        this.btnClass = "btnEditar";
        this.botonName = "Editar";
        this.showSelects = true;
        this.showInput = false;
      }
    } else if (this.data[2] === "tipo") {
      this.title = "Agregar Tipo de Organización";
      this.label = "Nuevo Tipo de Organización";
      this.showInput = false;
      this.showSelects = false;
      this.showInputTipo = true;
      this.botonName = "Editar";
      this.btnClass = "btnEditar";
    }
  }

  ngOnInit() {
    this.getTiposOrg();
    this.frmOrganizaciones = this.initForm();
  }
  initForm(): FormGroup {
    if (this.data[2] == "org") {
      if (this.data[0] == 1) {
        return this.fb.group({
          tipo: ['', [Validators.required]],
          social: ['', [Validators.required]],
          org: ['', [Validators.required, Validators.maxLength(30)]]
        })
      } else if (this.data[0] == 2) {
        return this.fb.group({
          org: ['', [Validators.required, Validators.maxLength(30)]]
        })
      } else {
        return this.fb.group({
          tipo: ['', [Validators.required]],
          social: ['', [Validators.required]],
        })
      }
    } else {
      return this.fb.group({
        txtTipo: ['', [Validators.required, Validators.maxLength(30)]],
      })
    }
  }

  onClickNo(): void {
    this.dialogoRef.close();
  }
  ejecutar(): void {
    try {
      if (this.data[2] == "org") {
        if (this.data[0] == 1) {
          this.postOrg();
        } else if (this.data[0] == 2) {
          this.putOrg();
        }
        else {
          this.putDatosOrg();
        }
      } else if(this.data[2] == "tipo") {
        this.postTipo();
      }
    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  getOrganizacion(id: number) {
    this.orgService.getOrganizacionByID(id).subscribe((data: OrganizacionesInterface[]) => {
      this.nombre = data[0].org;
    })
  }
  postOrg(): void {
    try {
      let { tipo, social, org } = this.frmOrganizaciones.value;
      this.orgService.postOrganizacion(tipo, social, org).subscribe((data: any) => {
        if (data.estado == 1) {
          this.mensaje("Advertencia", `${data.mensaje}`, 1);
        } else if (data.estado == 2) {
          this.mensaje("Información", `${data.mensaje}`, 2);
          this.dialogoRef.close();
        } else {
          this.mensaje("Error", `${data.mensaje}`, 3);
        }
      })
    } catch (error) {
      this.mensaje("Error", "Error al agregar organización", 3);
    }
  }
  putOrg(): void {
    try {
      let { org } = this.frmOrganizaciones.value
      this.orgService.putOrganizacion(this.data[1], org).subscribe((data: any) => {
        if (data.estado == 1) {
          this.mensaje("Advertencia", `${data.mensaje}`, 1);
        } else if (data.estado == 2) {
          this.mensaje("Información", `${data.mensaje}`, 2);
          this.dialogoRef.close();
        } else {
          this.mensaje("Error", `${data.mensaje}`, 3);
        }
      });
    } catch (error) {
      this.mensaje("Error", "Error al cambiar el nombre", 3);
    }
  }
  putDatosOrg() {
    try {
      let { tipo, social } = this.frmOrganizaciones.value
      this.orgService.putOrganizacionDatos(this.data[1], tipo, social).subscribe((data: any) => {
        if (data.estado == 1) {
          this.mensaje("Advertencia", `${data.mensaje}`, 1);
        } else if (data.estado == 2) {
          this.mensaje("Información", `${data.mensaje}`, 2);
          this.dialogoRef.close();
        } else {
          this.mensaje("Error", `${data.mensaje}`, 3);
        }
      });
    } catch (error) {
      this.mensaje("Error", "Error al editar los datos de la Organización", 3);
    }
  }
  postTipo(): void {
    try {
      let { txtTipo } = this.frmOrganizaciones.value;
      this.orgService.postTipoOrganizacion(txtTipo).subscribe((data: any) => {
        if (data.estado == 1) {
          this.mensaje("Advertencia", `${data.mensaje}`, 1);
        } else if (data.estado == 2) {
          this.mensaje("Información", `${data.mensaje}`, 2);
          this.dialogoRef.close();
        } else {
          this.mensaje("Error", `${data.mensaje}`, 3);
        }
      })
    } catch (error) {
      this.mensaje("Error", "Error al agregar tipo de organización", 3);
    }
  }
  getTiposOrg() {
    try {
      this.orgService.getTiposOrganizacion().subscribe((data: TiposOrgInterface[]) => {
        this.tipos = data;
      })
    } catch (error) {
      this.mensaje("Error", "Error al obtener los tipos de organización", 3);
    }
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
