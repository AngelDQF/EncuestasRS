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
  tipos:any;
  frmOrganizaciones: FormGroup;
  constructor(private dialogoRef: MatDialogRef<AgregarOrgComponent>, private dialog: MatDialog, private orgService: OrganizacionesService, @Inject(MAT_DIALOG_DATA) public data: Array<any>, private fb: FormBuilder) {
    if (this.data[0] == 1) {
      this.showTitle = false;
      this.botonName = "Agregar";
      this.btnClass = "btnGuardar";
      this.label = "Ingrese la Organización";
    } else {
      this.getOrganizacion(data[1]);
      this.showTitle = true;
      this.botonName = "Editar";
      this.btnClass = "btnEditar";
      this.label = "Nuevo nombre";
    }
  }

  ngOnInit() {
    this.getTiposOrg();
    this.frmOrganizaciones=this.initForm();
  }
  initForm(): FormGroup {
      return this.fb.group({
        tipo: ['', [Validators.required]],
        social: ['', [Validators.required]],
        org: ['', [Validators.required, Validators.maxLength(30)]]
      })
  }
  /*
  get org ():FormControlName{
    return this.frmOrganizaciones.get('org')?.value;
  }
  getErrorMessage() {
    if (this.org.hasError('required')) {
      return 'No puede estar vacío';
    }
    return this.org.hasError('maxLength') ? '' : 'No puede exceder los 30 caracteres';
  }*/
  onClickNo(): void {
    this.dialogoRef.close();
  }
  ejecutar(): void {
    try {
      if (this.data[0] == 1) {
        this.postOrg();
      } else {
        
      }

    } catch (error) {
      this.mensaje("Error", `${error}`, 3);
    }
  }
  getOrganizacion(id: number) {
    this.orgService.getTipoOrganizacionByID(id).subscribe((data: OrganizacionesInterface[]) => {
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
  putOrg():void{
    try{
      let{org}=this.frmOrganizaciones.value
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
    }catch(error){
      this.mensaje("Error","Error al cambiar el nombre",3);
    }
  }
  postTipo(): void {
    try {
      let { tipo } = this.frmOrganizaciones.value;
      this.orgService.postTipoOrganizacion(tipo).subscribe((data: any) => {
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
  getTiposOrg(){
    try {
      this.orgService.getTiposOrganizacion().subscribe((data: TiposOrgInterface[])=>{
        this.tipos=data;
      })
    } catch (error) {
      
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
